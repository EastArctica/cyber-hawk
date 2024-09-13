import GenericMessage from './GenericMessage';
import GenericTask from './tasks/GenericTask';

export default interface TaskMessage extends GenericMessage {
  type: 'TaskMessage';
  data: GenericTask;
}
