import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  // add user
  @Post('/insertUser')
  addUser(): string {
    return this.userService.addUser();
  }

  // get a single user
  @Get('/findUser/:userId')
  findUser(@Param() params): string {
    return this.userService.findUser(params.userId);
  }
}