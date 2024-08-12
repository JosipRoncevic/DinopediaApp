import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUsersDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}