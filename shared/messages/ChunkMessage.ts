import BaseMessage, { isBaseMessage } from './BaseMessage';

export type BlockInfo = {
    x: number,
    y: number,
    z: number,
    id: string
};

export default class ChunkMessage extends BaseMessage {
  public blocks: BlockInfo[];

  constructor(blocks: BlockInfo[], id?: number, timestamp?: number) {
    super('ChunkMessage', id, timestamp);

    this.blocks = blocks;
  }
}

export function isChunkMessage(json: any): json is ChunkMessage {
  let jsonClone = json;
  if (!isBaseMessage(jsonClone)) return false;

  return (
    json.type === 'ChunkMessage' &&
    Array.isArray(json.blocks)
  );
}
