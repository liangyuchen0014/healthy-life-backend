import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { CreateGlobalinfoDto } from '../dto/create-globalinfo.dto';
@Entity()
export class Globalinfo {
  /* 数据库中的列类型是根据你使用的属性类型推断的，例如：
   number将被转换为integer，string将转换为varchar，boolean转换为bool等。
   但你也可以通过在@Column装饰器中隐式指定列类型来使用数据库支持的任何列类型。 */
  @PrimaryColumn()
  id: number;
  @Column()
  firstDate: string;
  @Column()
  lastDate: string;
  @Column()
  checkInDays: number;
  @Column()
  achievements: string;
}
