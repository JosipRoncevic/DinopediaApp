import { UsersService } from './users.service';
import { CreateUsersDto } from './users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getCurrentUser(req: any): any;
    addUser(createusersdto: CreateUsersDto): Promise<{
        msg: string;
        userId: any;
        userName: string;
    }>;
    login(req: any): any;
    getHello(req: any): string;
    logout(req: any): any;
}
