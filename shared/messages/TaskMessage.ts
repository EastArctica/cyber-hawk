import BaseMessage, { isBaseMessage } from './BaseMessage';
import BaseTask, { isBaseTask } from './tasks/BaseTask';

export default class TaskMessage extends BaseMessage {
  public task: BaseTask;
  constructor(task: BaseTask, id?: number, timestamp?: number) {
    super('TaskMessage', id, timestamp);
    
    this.task = task;
  }
}

export function isTaskMessage(json: any): json is TaskMessage {
  let jsonClone = json;
  if (!isBaseMessage(jsonClone)) return false;

  return (
    json.type === 'ErrorMessage' &&
    typeof json.task === 'object' &&
    isBaseTask(json.task)
  );
}
