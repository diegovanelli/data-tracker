import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageViewModule } from './page-view/page-view.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [PageViewModule, PurchaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
