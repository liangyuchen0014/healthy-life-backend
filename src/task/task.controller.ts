import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) { }
  @Post('/update')
  updateTaskByDateAndTaskID(@Body() createTaskDto: CreateTaskDto): any {
    return this.taskService.updateTaskByDateAndTaskID(createTaskDto);
  }
  @Post('/add')
  addTask(@Body() createTaskDto: CreateTaskDto): any {
    return this.taskService.addTask(createTaskDto);
  }
  @Post('/query')
  query(@Body() date: string, isOpen: boolean = true): any {
    return this.taskService.query(date, isOpen);
  }
  @Get('/getAll')
  getAllTasks() {
    return this.taskService.getAllTasks();
    // console.log('获取所有任务成功log');
  }
}
