import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SocietiesModule } from './societies/societies.module';
import { FacultiesModule } from './faculties/faculties.module';
import { Faculty } from './faculties/faculty.entity';
import { Society } from './societies/society.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Faculty, Society],
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
    }),
    FacultiesModule,
    SocietiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
