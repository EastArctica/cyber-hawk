import { standalone as standaloneViewer } from 'prismarine-viewer';
import { Vec3 } from 'vec3';

import prismarineWorld from 'prismarine-world';
import prismarineChunk from 'prismarine-chunk';

const version = '1.13.2';
const World = prismarineWorld(version);
const Chunk = prismarineChunk(version);

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

// Generate a level 4 menger sponge fractal
(async () => {
  viewer.update();
})();
