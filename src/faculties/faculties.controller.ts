import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
} from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post()
  create(@Body() createFacultyDto: CreateFacultyDto) {
    return this.facultiesService.create(createFacultyDto);
  }

  @Get()
  async findAll() {
    return await this.facultiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.facultiesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFacultyDto: UpdateFacultyDto,
  ) {
    return await this.facultiesService.update(+id, updateFacultyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.facultiesService.remove(+id);
  }
}
