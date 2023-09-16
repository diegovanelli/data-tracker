import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

@Injectable()
export class PurchaseService {
  private purshase = [];
  create(createPurchaseDto: CreatePurchaseDto) {
    this.purshase.push(createPurchaseDto);
    return createPurchaseDto;
  }
}
