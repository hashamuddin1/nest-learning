import { Injectable } from "@nestjs/common";

@Injectable()
export class PackageService {
  getPackage(): string {
    return 'This is Package Controller';
  }

  createPackage(): string {
    return 'This is Create Package Controller';
  }
}
