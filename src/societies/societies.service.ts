import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSocietyDto } from './dto/create-society.dto';
import { UpdateSocietyDto } from './dto/update-society.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Society } from './society.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SocietiesService {
  constructor(
    @InjectRepository(Society) private societiesRepository: Repository<Society>,
  ) {}

  async create(createSocietyDto: CreateSocietyDto) {
    const society = this.societiesRepository.create(createSocietyDto);
    return this.saveHelper(society);
  }

  async findAll() {
    return await this.societiesRepository.find();
  }

  async findOne(id: number) {
    return await this.societiesRepository.findOne(id);
  }

  async findBySlug(slug: string) {
    return await this.societiesRepository.findOne({ slug }, {relations: ["faculty"]});
  }

  async update(id: number, updateSocietyDto: UpdateSocietyDto) {
    const society = await this.findOne(id);
    for (const prop in updateSocietyDto) society[prop] = updateSocietyDto[prop];
    return this.saveHelper(society);
  }

  async remove(id: number) {
    return await this.societiesRepository.delete(id);
  }

  // Helpers
  async saveHelper(society: Society) {
    try {
      return await society.save();
    } catch (err) {
      if (err.errno === 1062)
        throw new InternalServerErrorException(
          `Society with name "${society.name}" or slug "${society.slug}" already exists.`,
        );
      else throw new InternalServerErrorException();
    }
  }
}
