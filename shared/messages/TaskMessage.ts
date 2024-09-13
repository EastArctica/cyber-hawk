import { GenericMessage } from './GenericMessage';
import { GenericTask } from './tasks/GenericTask';

export interface TaskMessage extends GenericMessage {
    type: 'TaskMessage';
    data: GenericTask;
};
