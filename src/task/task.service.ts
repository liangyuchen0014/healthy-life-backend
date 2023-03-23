import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskInfo } from './entities/task.entity';
@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskInfo) private readonly taskInfo: Repository<TaskInfo>,
  ) { }

  addTask(createTaskDto: CreateTaskDto) {
    const data: TaskInfo = new TaskInfo();
    data.date = createTaskDto.date;
    data.taskID = createTaskDto.taskID;
    data.targetValue = createTaskDto.targetValue;
    data.isAlarm = createTaskDto.isAlarm;
    data.startTime = createTaskDto.startTime;
    data.endTime = createTaskDto.endTime;
    data.frequency = createTaskDto.frequency;
    data.isDone = createTaskDto.isDone;
    data.finValue = createTaskDto.finValue;
    data.isOpen = createTaskDto.isOpen;
    return this.taskInfo.save(data);
  }
  async updateTaskByDateAndTaskID(createTaskDto: CreateTaskDto) {
    let taskToUpdate: TaskInfo = await this.taskInfo.findOneBy({
      date: createTaskDto.date,
      taskID: createTaskDto.taskID
    });
    taskToUpdate.targetValue = createTaskDto.targetValue;
    taskToUpdate.isAlarm = createTaskDto.isAlarm;
    taskToUpdate.startTime = createTaskDto.startTime;
    taskToUpdate.endTime = createTaskDto.endTime;
    taskToUpdate.frequency = createTaskDto.frequency;
    taskToUpdate.isDone = createTaskDto.isDone;
    taskToUpdate.finValue = createTaskDto.finValue;
    taskToUpdate.isOpen = createTaskDto.isOpen;
    return this.taskInfo.save(taskToUpdate);
  }
  async query(iDate: string, isOpen: boolean = true) {
    console.log(typeof iDate);
    console.info('date:' + iDate)
    console.info('date:' + JSON.stringify(iDate))
    console.info('isOpen:' + isOpen)
    let strDate: string = iDate.toString();
    if (isOpen) {
      let taskInfoToQuery: TaskInfo[] = await this.taskInfo.find({
        where:
          { date: iDate, isOpen: true },
        order: {
          taskID: "ASC"
        }
      })
      return taskInfoToQuery;
    }
    else {
      let taskInfoToQuery: TaskInfo[] = await this.taskInfo.find({
        where:
          { date: iDate },
        order: {
          taskID: "ASC"
        }
      })
      return taskInfoToQuery;
    }
  }
  getAllTasks() {
    return this.taskInfo.find();
  }
}

const taskList: any = [
  {
    id: 0,
    taskID: 1,
    isOpen: true,
    date: '',
    targetValue: '7:00',
    isAlarm: true,
    startTime: '',
    endTime: ';',
    frequency: '',
    isDone: false,
    finValue: '',
  },
  {
    id: 1,
    taskID: 2,
    isOpen: true,
    date: '',
    targetValue: '1.5',
    isAlarm: true,
    startTime: '',
    endTime: ';',
    frequency: '',
    isDone: false,
    finValue: '',
  },
  {
    id: 2,
    taskID: 3,
    isOpen: true,
    date: '',
    targetValue: '3',
    startTime: '08: 00',
    endTime: '',
    isAlarm: true,
    frequency: '',
    isDone: false,
    finValue: '',
  },
  {
    id: 3,
    taskID: 4,
    isOpen: true,
    date: '',
    targetValue: '1',
    isAlarm: true,
    startTime: '',
    endTime: ';',
    frequency: '',
    isDone: false,
    finValue: '',
  },
  {
    id: 4,
    taskID: 5,
    isOpen: true,
    date: '',
    targetValue: '21:30',
    isAlarm: true,
    startTime: '',
    endTime: ';',
    frequency: '',
    isDone: false,
    finValue: '',
  },
  {
    id: 5,
    taskID: 6,
    isOpen: true,
    date: '',
    targetValue: '22:00',
    isAlarm: true,
    startTime: '',
    endTime: ';',
    frequency: '',
    isDone: false,
    finValue: '',
  },
];
