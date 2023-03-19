import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { CreateDayinfoDto } from '../dto/create-dayinfo.dto';
@Entity()
export class Dayinfo {
  /* 数据库中的列类型是根据你使用的属性类型推断的，例如：
   number将被转换为integer，string将转换为varchar，boolean转换为bool等。
   但你也可以通过在@Column装饰器中隐式指定列类型来使用数据库支持的任何列类型。 */
  @PrimaryColumn()
  date: string;
  @Column()
  targetTaskNum: number;
  @Column()
  finTaskNum: number;
}
