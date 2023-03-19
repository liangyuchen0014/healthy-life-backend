import { Module } from '@nestjs/common';
import { DayinfoService } from './dayinfo.service';
import { DayinfoController } from './dayinfo.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Dayinfo } from './entities/dayinfo.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Dayinfo])],
  controllers: [DayinfoController],
  providers: [DayinfoService],
})
export class DayinfoModule { }
