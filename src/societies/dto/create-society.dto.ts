import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateSocietyDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
