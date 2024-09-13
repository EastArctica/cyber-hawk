import GenericMessage from './GenericMessage';

export default interface ErrorMessage extends GenericMessage {
  type: 'ErrorMessage';
  data: {
    message: string;
    raw: string;
  };
}
