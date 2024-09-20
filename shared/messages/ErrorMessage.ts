import BaseMessage, { isBaseMessage } from './BaseMessage';

export default class ErrorMessage extends BaseMessage {
  public message: string;
  public raw: string;

  constructor(message: string, raw: string, id?: number, timestamp?: number) {
    super('ErrorMessage', id, timestamp);

    this.message = message;
    this.raw = raw;
  }
}

export function isErrorMessage(json: any): json is ErrorMessage {
  let jsonClone = json;
  if (!isBaseMessage(jsonClone)) return false;

  return (
    json.type === 'ErrorMessage' &&
    typeof json.message === 'string' &&
    typeof json.raw === 'string'
  );
}
