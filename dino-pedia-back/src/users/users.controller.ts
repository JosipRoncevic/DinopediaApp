import { Body, Controller, Get, Post, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { CreateUsersDto } from './users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @UseGuards(AuthenticatedGuard)
    @Get('/current')
    getCurrentUser(@Request() req): any {
        return req.user;
    }

    //post / signup
    @UsePipes(new ValidationPipe({ whitelist: true }))
    @Post('/signup')
    async addUser(
        @Body() createusersdto: CreateUsersDto,
    ) {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(createusersdto.password, saltOrRounds);
        const result = await this.usersService.insertUser(
            createusersdto.username,
            hashedPassword,
        );
        return {
            msg: 'User successfully registered',
            userId: result.id,
            userName: result.username
        };
    }

    //Post / Login
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Request() req): any {
        return {
            User: req.user,
            msg: 'User logged in'
        };
    }

    // Get / protected
    @UseGuards(AuthenticatedGuard)
    @Get('/protected')
    getHello(@Request() req): string {
        return req.user;
    }

    //Get / logout
    @Get('/logout')
    logout(@Request() req): any {
        req.session.destroy();
        return { msg: 'The user session has ended' }
    }
}