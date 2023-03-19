import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { CreateGlobalinfoDto } from './dto/create-globalinfo.dto';
import { GlobalinfoService } from './globalinfo.service';

@Controller('globalinfo')
export class GlobalinfoController {
  constructor(private globalinfoService: GlobalinfoService) { }
  @Post('/update')
  update(@Body() createGlobalinfoDto: CreateGlobalinfoDto): any {
    return this.globalinfoService.update(createGlobalinfoDto);
  }
  @Post('/add')
  addDayinfo(@Body() createGlobalinfoDto: CreateGlobalinfoDto): any {
    return this.globalinfoService.addDayinfo(createGlobalinfoDto);
  }
  @Get('/query')
  query(): any {
    return this.globalinfoService.query();
  }
}
