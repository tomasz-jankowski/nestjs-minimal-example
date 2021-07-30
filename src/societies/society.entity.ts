import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Faculty } from '../faculties/faculty.entity';
import { TimeStampedSluggifiedEntity } from '../common/entities/time-stamped-sluggified.entity';
import { IsEmail, IsUrl } from 'class-validator';

enum SocietyType {
  undefined = 'undefined',
  club = 'club',
  organization = 'organization',
}

@Entity()
export class Society extends TimeStampedSluggifiedEntity {
  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsUrl()
  website: string;

}
