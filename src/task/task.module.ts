import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskInfo } from './entities/task.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TaskInfo])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
