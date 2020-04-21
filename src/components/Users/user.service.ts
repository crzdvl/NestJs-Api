import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

    async findAll(): Promise<IUser[]> {
        return this.userModel.find().exec();
    }

    async create(CreateUserDto: CreateUserDto): Promise<IUser> {
        const createdCat = new this.userModel(CreateUserDto);
        return createdCat.save();
    }
}
