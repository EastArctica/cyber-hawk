import GenericTask from './GenericTask';

export enum ChatType {
  Log = 'Log',
  Chat = 'Chat',
}

export default interface ChatTask extends GenericTask {
  type: 'ChatTask';
  chatType: ChatType;
  message: string;
}
