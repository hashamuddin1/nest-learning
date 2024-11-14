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
        host: configService.get<string>('HOST'),
        port: +configService.get<number>('PORT'),
        username: configService.get<string>('USER'),
        password: configService.get<string>('PASSWORD'),
        database: configService.get<string>('DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'Hasham@147',
    //   database: 'nestlearning',
    //   entities: [],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService) {
    // Logging environment variables
    console.log('HOST:', this.configService.get<string>('HOST'));
    console.log('PORT:', this.configService.get<number>('PORT'));
    console.log('USERNAME:', this.configService.get<string>('USERNAME'));
    console.log('PASSWORD:', this.configService.get<string>('PASSWORD'));
    console.log('DATABASE:', this.configService.get<string>('DATABASE'));
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MainMiddleware).forRoutes('book');
    consumer.apply(MainMiddleware).forRoutes('users');
  }
}
