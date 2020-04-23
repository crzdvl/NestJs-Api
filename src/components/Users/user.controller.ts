import { Controller, Get, Post, Body} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Get('/users')
    async findAll(): Promise<UserEntity[]> {
        return this.userService.findAll();
    }

  @Post('/api/users')
  async create(@Body() CreateUserDto: CreateUserDto): Promise<UserEntity> {
      return await this.userService.create(CreateUserDto);
  }
}
