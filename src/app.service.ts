import { Injectable } from '@nestjs/common';
import { FacultiesService } from './faculties/faculties.service';
import { SocietiesService } from './societies/societies.service';
import _ = require('lodash')


@Injectable()
export class AppService {
  // constructor(
  //   private facultiesService: FacultiesService,
  //   private societiesService: SocietiesService,
  // ) {}
  //
  // async getFaculties() {
  //   const result = await this.facultiesService.findAll();
  //   const organizations = [], faculties = [];
  //   for (const item of result) {
  //       if (item['slug'] === 'organizacje-studenckie')
  //         organizations.push(item);
  //       else
  //         faculties.push(item);
  //
  //   }
  //   const facultiesSorted = _.sortBy(faculties, 'name');
  //   return [organizations, facultiesSorted];
  // }
  //
  // async getSociety(slug: string) {
  //   return await this.societiesService.findBySlug(slug);
  // }
  //
  // async getFaculty(slug: string) {
  //   return await this.facultiesService.findBySlug(slug);
  // }
}
