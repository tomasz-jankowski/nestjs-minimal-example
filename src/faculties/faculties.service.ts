import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculty } from './faculty.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty) private facultiesRepository: Repository<Faculty>,
  ) {}

  async create(createFacultyDto: CreateFacultyDto) {
    const faculty = this.facultiesRepository.create(createFacultyDto);
    return this.saveHelper(faculty);
  }

  async findAll() {
    return await this.facultiesRepository.find({relations: ["societies"]});
  }

  async findOne(id: number) {
    return await this.facultiesRepository.findOne(id);
  }

  async findBySlug(slug: string) {
    return await this.facultiesRepository.findOne({ slug }, {relations: ["societies"]});
  }

  async update(id: number, updateFacultyDto: UpdateFacultyDto) {
    const faculty = await this.findOne(id);
    for (const prop in updateFacultyDto) faculty[prop] = updateFacultyDto[prop];
    return this.saveHelper(faculty);
  }

  async remove(id: number) {
    return await this.facultiesRepository.delete(id);
  }

  // Helpers
  async saveHelper(faculty: Faculty) {
    try {
      return await faculty.save();
    } catch (err) {
      if (err.errno === 1062)
        throw new InternalServerErrorException(
          `Faculty with name "${faculty.name}" or slug "${faculty.slug}" already exists.`,
        );
      else throw new InternalServerErrorException();
    }
  }
}
