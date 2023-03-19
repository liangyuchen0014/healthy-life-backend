import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { CreateDayinfoDto } from './dto/create-dayinfo.dto';
import { DayinfoService } from './dayinfo.service';

@Controller('dayinfo')
export class DayinfoController {
  constructor(private dayinfoService: DayinfoService) { }
  @Post('/update')
  update(@Body() createDayinfoDto: CreateDayinfoDto): any {
    return this.dayinfoService.update(createDayinfoDto);
  }
  @Post('/add')
  addDayinfo(@Body() createDayinfoDto: CreateDayinfoDto): any {
    return this.dayinfoService.addDayinfo(createDayinfoDto);
  }
  @Post('/query')
  queryDate(@Body() queryDate: string): any {
    return this.dayinfoService.queryDate(queryDate);
  }
  @Post('/queryList')
  queryDateList(@Body() queryDateList: string[]): any {
    return this.dayinfoService.queryDateList(queryDateList);
  }
  /* @Get('/getAll')
  getAllTasks() {
    return this.dayinfoService.getAllTasks();
    // console.log('获取所有任务成功log');
  } */
}
