import { IsNotEmpty } from "class-validator";

export class CreatePageViewDto {
  @IsNotEmpty({ message: 'O page não pode ser vazio' })
  page: string;

  @IsNotEmpty({ message: 'O user não pode ser vazio' })
  user: string;

  @IsNotEmpty({ message: 'O date não pode ser vazio' })
  date: string;
}
