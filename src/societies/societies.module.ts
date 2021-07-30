import { Module } from '@nestjs/common';
import { SocietiesService } from './societies.service';
import { SocietiesController } from './societies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Society } from './society.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Society])],
  controllers: [SocietiesController],
  providers: [SocietiesService],
  exports: [SocietiesService],
})
export class SocietiesModule {}
