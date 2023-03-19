import { Module } from '@nestjs/common';
import { GlobalinfoService } from "./globalinfo.service";
import { GlobalinfoController } from './globalinfo.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Globalinfo } from './entities/globalinfo.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Globalinfo])],
  controllers: [GlobalinfoController],
  providers: [GlobalinfoService],
})
export class GlobalinfoModule { }
