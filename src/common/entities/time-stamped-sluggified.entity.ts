import { BeforeInsert, BeforeUpdate, Column, Entity, Unique } from 'typeorm';
import { TimeStampedEntity } from './time-stamped.entity';
import slugify from 'slugify';

@Entity()
@Unique(['name', 'slug'])
export abstract class TimeStampedSluggifiedEntity extends TimeStampedEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  slug: string;

  @BeforeInsert()
  @BeforeUpdate()
  updateSlug() {
    this.slug = slugify(this.name, { lower: true, locale: 'pl' });
  }
}
