export default class BaseTask {
  public type: string;

  constructor(type: string) {
    this.type = type;
  }
}

export function isBaseTask(json: any): json is BaseTask {
  return (
    typeof json == 'object' &&
    typeof json.type === 'string'
  );
}
