import { Controller, Get, Post, Body} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { IUser } from './user.interface';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Get('/users')
    async findAll(): Promise<IUser[]> {
        return this.userService.findAll();
    }

  @Post('/api/users')
  async create(@Body() CreateUserDto: CreateUserDto) {
      return this.userService.create(CreateUserDto);
  }
}
