import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('signup')
  signup(): string {
    return this.AuthService.signup();
  }

  @Post('login')
  login(): string {
    return this.AuthService.login();
  }
}
