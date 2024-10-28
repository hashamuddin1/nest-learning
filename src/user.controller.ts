import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller("users")

export class UserController{
    // add user
    @Post("/insertUser")
    addUser():string{
        return "user added"
    }

    // get a single user
    @Get("/findUser/:userId")
    findUser(@Param() params):string{
        return `user found of id ${params.userId}`;
    }
}