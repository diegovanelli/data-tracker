import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

@Injectable()
export class PurchaseService {
  create(createPurchaseDto: CreatePurchaseDto) {
    return 'This action adds a new purchase';
  }
}
