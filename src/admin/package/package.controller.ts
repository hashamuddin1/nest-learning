import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('package')
export class PackageController {
  @Get()
  getPackage(): string {
    return 'This is Package Controller';
  }

  @Post('createPackage')
  createPackage(@Body() packageName: string): string {
    console.log(packageName);
    return 'This is Create Package Controller';
  }
}
