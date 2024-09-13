interface TaskMessage extends GenericMessage {
    type: 'TaskMessage';
    data: GenericTask;
};
