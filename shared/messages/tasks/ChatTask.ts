enum ChatType {
    Log = 'Log',
    Chat = 'Chat',
};

interface ChatTask extends GenericTask {
    type: 'ChatTask';
    chatType: ChatType;
    message: string;
};
