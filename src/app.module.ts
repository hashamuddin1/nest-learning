import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [AdminModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
