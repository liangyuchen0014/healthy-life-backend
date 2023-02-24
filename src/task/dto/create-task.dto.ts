export class CreateTaskDto {
  id: number;
  date: string;
  taskID: number;
  targetValue: string;
  isAlarm: boolean;
  startTime: string;
  endTime: string;
  frequency: string;
  isDone: boolean;
  finValue: string;
  isOpen: boolean;
}
