import { Module } from '@nestjs/common';
import { PageViewModule } from './page-view/page-view.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [PageViewModule, PurchaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
