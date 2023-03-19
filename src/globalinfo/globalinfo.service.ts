import { Injectable } from '@nestjs/common';
import { CreateGlobalinfoDto } from './dto/create-globalinfo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Globalinfo } from './entities/globalinfo.entity';
@Injectable()
export class GlobalinfoService {
  constructor(
    @InjectRepository(Globalinfo) private readonly globalinfo: Repository<Globalinfo>,
  ) { }

  addDayinfo(createGlobalinfoDto: CreateGlobalinfoDto) {
    const data: Globalinfo = new Globalinfo();
    data.achievements = createGlobalinfoDto.achievements;
    data.checkInDays = createGlobalinfoDto.checkInDays;
    data.firstDate = createGlobalinfoDto.firstDate;
    data.lastDate = createGlobalinfoDto.lastDate;
    data.id = 0;
    return this.globalinfo.save(data);
  }
  async update(createGlobalinfoDto: CreateGlobalinfoDto) {
    let globalinfoToUpdate: Globalinfo = await this.globalinfo.findOneBy({
      id: 0,
    });
    globalinfoToUpdate.achievements = createGlobalinfoDto.achievements;
    globalinfoToUpdate.checkInDays = createGlobalinfoDto.checkInDays;
    globalinfoToUpdate.firstDate = createGlobalinfoDto.firstDate;
    globalinfoToUpdate.lastDate = createGlobalinfoDto.lastDate;
    return this.globalinfo.save(globalinfoToUpdate);
  }
  async query() {
    let globalinfoToQuery: Globalinfo = await this.globalinfo.findOneBy({
      id: 0,
    });
    return globalinfoToQuery;
  }

}