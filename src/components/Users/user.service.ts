import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) 
        private userModel: Repository<UserEntity>
    ) {}

    async findAll(): Promise<UserEntity[]> {
        return this.userModel.find();
    }

    async create(CreateUserDto: CreateUserDto): Promise<UserEntity> {
        return this.userModel.save(CreateUserDto);
    }
}
