import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  addUser(): string {
    return 'user added';
  }

  findUser(value:string): string {
    return `user found of id ${value}`;
  }
}
