import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<User>) { }
    async insertUser(userName: string, password: string) {
        const username = userName.toLowerCase();
        const newUser = new this.userModel({
            username,
            password,
        });
        try {
            await newUser.save();
            return newUser;
        } catch (error) {
            if (error.code === 11000) {  // MongoDB duplicate key error code
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException('Failed to create user');
            }
        }
    }

    async getUser(userName: string) {
        const username = userName.toLowerCase();
        const user = await this.userModel.findOne({ username });
        return user;
    }
}