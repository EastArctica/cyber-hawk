import BaseMessage, { isBaseMessage } from './BaseMessage';

// TODO: I have no clue what params this should have, but it currently is just to register the socket as a webclient
export default class WebClientInitMessage extends BaseMessage {
  constructor(id?: number, timestamp?: number) {
    super('WebClientInitMessage', id, timestamp);
  }
}

export function isWebClientInitMessage(json: any): json is WebClientInitMessage {
  let jsonClone = json;
  if (!isBaseMessage(jsonClone)) return false;

  return (
    json.type === 'WebClientInitMessage'
  );
}
