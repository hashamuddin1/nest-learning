import { Controller, Get, Post, Body } from '@nestjs/common';
import { PackageService } from './package.service';

@Controller('package')
export class PackageController {
  constructor(private PackageService: PackageService) {}

  @Get()
  getPackage(): string {
    return this.PackageService.getPackage();
  }

  @Post('createPackage')
  createPackage(): string {
    return this.PackageService.createPackage();
  }
}
