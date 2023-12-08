import { Controller,Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    userInfo():string{
        return "This is user controller"
    }

    @Get("history")
    userHistory():string{
        return "This is userHistory controller"
    }
}
