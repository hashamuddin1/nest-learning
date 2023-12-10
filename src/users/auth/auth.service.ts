import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  signup(): string {
    return 'This is Signup Service';
  }

  login(): string {
    return 'This is Login Service';
  }
}
