import GenericMessage from './GenericMessage';

// TODO: I have no clue what params this should have, but it currently is just to register the socket as a webclient
export default interface WebClientInitMessage extends GenericMessage {
  type: 'WebClientMessage';
}
