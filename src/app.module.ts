import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user.module';
import { OrderModule } from './order.module';
import { PaymentModule } from './payment/payment.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';

@Module({
  imports: [UserModule,OrderModule, PaymentModule, EcommerceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('App Module constructor');
  }
}
