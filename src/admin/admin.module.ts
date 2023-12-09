import { Module } from '@nestjs/common';
import { PackageController } from './package/package.controller';
import { PackageService } from './package/package.service';

@Module({
  controllers: [PackageController],
  providers: [PackageService]
})
export class AdminModule {}
