import WebSocket from 'ws';

// Shared imports
import ErrorMessage, { isErrorMessage } from '../../shared/messages/ErrorMessage';
import { isChunkMessage } from '../../shared/messages/ChunkMessage';
import WebClientInitMessage from '../../shared/messages/WebClientInitMessage';

import { standalone as standaloneViewer } from 'prismarine-viewer';
import { Vec3 } from 'vec3';

import prismarineWorld from 'prismarine-world';
import prismarineChunk from 'prismarine-chunk';
import prismarineBlock from 'prismarine-block';

const version = '1.13.2';
const World = prismarineWorld(version);
const Chunk = prismarineChunk(version);
const Block = prismarineBlock(version);

// Create a flat world with only 1 layer of stone at y=0
function worldGenerator(x: number, y: number, z: number) {
  if (y > 0) return 0;
  return 1;
}

const world = new World((chunkX: number, chunkZ: number) => {
  const chunk = new Chunk({ x: chunkX, z: chunkZ });
  for (let y = 0; y < 256; y++) {
    for (let x = 0; x < 16; x++) {
      for (let z = 0; z < 16; z++) {
        chunk.setBlockStateId(new Vec3(x, y, z), worldGenerator(chunkX * 16 + x, y, chunkZ * 16 + z));
      }
    }
  }
  return chunk;
});

const viewer = standaloneViewer({
  version,
  world: world as any as (x: number, y: number, z: number) => 0 | 1,
  center: new Vec3(0, 51, 0),
  port: 3001,
});

// Connect to websocket
const ws = new WebSocket('ws://localhost:8080');
ws.on('open', () => {
  console.log('Connected to server');
  ws.send(JSON.stringify(new WebClientInitMessage()))

  ws.on('message', (message: string) => {
    let messageObj: object;
    try {
      messageObj = JSON.parse(message);
    } catch (e: any) {
      let errMessage = new ErrorMessage('Failed to parse message', "" + e);

      ws.send(JSON.stringify(errMessage));
      return;
    }

    if (isChunkMessage(messageObj)) {
      console.log(`Received chunk message =>`, messageObj.blocks.length);
      for (const block of messageObj.blocks) {
        try {
          world.setBlock(new Vec3(block.x, block.y, block.z), Block.fromProperties(block.id.substring(10), {}, 0));
        } catch (e) {
          //console.error(e);
        }
      }
      viewer.update();
    } else {
      console.log(`Received message =>`, messageObj);
    }
  });
});
