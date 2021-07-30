import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // @Render('home/index')
  // index() {
  //   return { title: 'Strona główna' };
  // }
  //
  // @Get('kola-i-organizacje')
  // @Render('home/societies')
  // async societies() {
  //   const [organizations, faculties] = await this.appService.getFaculties();
  //   return {
  //     title: 'Koła i Organizacje',
  //     organizations,
  //     faculties
  //   };
  // }
  //
  // @Get('aktualnosci')
  // @Render('home/news')
  // news() {
  //   return { title: 'Aktualności' };
  // }
  //
  // @Get('dokumenty')
  // @Render('home/docs')
  // documents() {
  //   return { title: 'Dokumenty' };
  // }
  //
  // @Get('faq')
  // @Render('home/faq')
  // faq() {
  //   return { title: 'FAQ' };
  // }
  //
  // @Get('kontakt')
  // @Render('home/contact')
  // contact() {
  //   return { title: 'Kontakt' };
  // }
  //
  // @Get('societies/:slug')
  // @Render('home/society')
  // async society(@Param('slug') slug: string) {
  //   const society = await this.appService.getSociety(slug);
  //   return { title: society.name, society };
  // }
  //
  // @Get('faculties/:slug')
  // @Render('home/faculty')
  // async faculty(@Param('slug') slug: string) {
  //   const faculty = await this.appService.getFaculty(slug);
  //   return { title: faculty.name, faculty}
  // }
}
