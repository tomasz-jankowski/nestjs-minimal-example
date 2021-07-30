import { Entity, OneToMany } from 'typeorm';
import { Society } from '../societies/society.entity';
import { TimeStampedSluggifiedEntity } from '../common/entities/time-stamped-sluggified.entity';

@Entity()
export class Faculty extends TimeStampedSluggifiedEntity {
  @OneToMany((type) => Society, (society) => society.faculty, { eager: false })
  societies: Society[];
}
