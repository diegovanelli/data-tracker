import { IsNotEmpty } from 'class-validator';

export class CreatePurchaseDto {
  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  value: number;
}
