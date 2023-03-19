import { Injectable } from '@nestjs/common';
import { CreateDayinfoDto } from './dto/create-dayinfo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Dayinfo } from './entities/dayinfo.entity';
@Injectable()
export class DayinfoService {
  constructor(
    @InjectRepository(Dayinfo) private readonly dayinfo: Repository<Dayinfo>,
  ) { }

  addDayinfo(createDayinfoDto: CreateDayinfoDto) {
    const data: Dayinfo = new Dayinfo();
    data.date = createDayinfoDto.date;
    data.finTaskNum = createDayinfoDto.finTaskNum;
    data.targetTaskNum = createDayinfoDto.targetTaskNum;
    return this.dayinfo.save(data);
  }
  async update(createDayinfoDto: CreateDayinfoDto) {
    let dayinfoToUpdate: Dayinfo = await this.dayinfo.findOneBy({
      date: createDayinfoDto.date,
    });
    dayinfoToUpdate.finTaskNum = createDayinfoDto.finTaskNum;
    dayinfoToUpdate.targetTaskNum = createDayinfoDto.targetTaskNum;
    return this.dayinfo.save(dayinfoToUpdate);
  }
  async queryDate(iDate: string) {
    let dayinfoToUpdate: Dayinfo = await this.dayinfo.findOneBy({
      date: iDate,
    });
    return dayinfoToUpdate;
  }
  async queryDateList(dates: string[]) {
    let dayinfoToUpdate: Dayinfo[] = await this.dayinfo.createQueryBuilder('entity')
      .where('entity.date IN (:...dates)', { dates: dates })
      .getMany();
    return dayinfoToUpdate;
  }

  getDayinfo() {
    return this.dayinfo.find();
  }
}