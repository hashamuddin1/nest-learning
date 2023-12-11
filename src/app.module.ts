import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './users/users.module';
import { AuthMiddleware } from './middleware/auth';

@Module({
  imports: [AdminModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
//export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(AuthMiddleware).forRoutes('package');
    //forRoutes('package') means k jis jis url may package name araha hay usmay ye middleware apply krdo
    // forRoutes(controllerName) means k is controller k har routes ma apply kro
    consumer.apply(AuthMiddleware).forRoutes({
      // To hit specific url
      path:"/auth/signup",method:RequestMethod.POST,
    });
    consumer.apply(AuthMiddleware).forRoutes({
      // To hit specific url
      path:"/package",method:RequestMethod.GET,
    });
  }
}
