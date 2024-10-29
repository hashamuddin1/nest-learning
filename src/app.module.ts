import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user.module';
import { OrderModule } from './order.module';
import { PaymentModule } from './payment/payment.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { BookModule } from './book/book.module';
import { MainMiddleware } from './app.middleware';

@Module({
  imports: [
    UserModule,
    OrderModule,
    PaymentModule,
    EcommerceModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('App Module constructor');
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MainMiddleware).forRoutes('book');
    consumer.apply(MainMiddleware).forRoutes('users');
  }
}
