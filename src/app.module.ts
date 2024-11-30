import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user.module';
import { OrderModule } from './order.module';
import { PaymentModule } from './payment/payment.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { BookModule } from './book/book.module';
import { MainMiddleware } from './app.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    OrderModule,
    PaymentModule,
    EcommerceModule,
    BookModule,

    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env',
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MainMiddleware).forRoutes('book');
    consumer.apply(MainMiddleware).forRoutes('users');
  }
}
