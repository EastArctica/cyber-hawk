export default abstract class BaseMessage {
  public readonly type: string;
  // Incremental id
  public readonly id: number;
  // Time this message was created in ms since 00:00:00 UTC on January 1st 1970
  public readonly timestamp: number; 

  constructor(type: string, id?: number, timestamp?: number) {
    this.type = type;

    this.id = id ?? BaseMessage.nextId();
    this.timestamp = timestamp ?? Date.now();
  }

  private static currentId = 0;
  private static nextId(): number {
    return ++this.currentId;
  }
}

export function isBaseMessage(json: any): json is BaseMessage {
  return (
    typeof json === 'object' &&
    typeof json.id === 'number' &&
    typeof json.timestamp === 'number' &&
    typeof json.type === 'string'
  );
}