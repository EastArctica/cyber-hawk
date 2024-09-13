import { GenericTask } from './GenericTask';

export enum ChatType {
    Log = 'Log',
    Chat = 'Chat',
};

export interface ChatTask extends GenericTask {
    type: 'ChatTask';
    chatType: ChatType;
    message: string;
};

