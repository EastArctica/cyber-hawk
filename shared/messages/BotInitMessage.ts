import GenericMessage from './GenericMessage';

export default interface ClientInitMessage extends GenericMessage {
  type: 'BotInitMessage';
  // Minecraft account username
  username: string;
  // Server info
  address: string;
  port: number;
}
