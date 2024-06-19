import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserDTO } from 'src/user.dto';
import { userService } from './user.service';
import { UserRepository } from './user.repository';

@Controller('users')
export class UserController {
  userService: userService; // create a new instance of the userService class
  constructor() {
    const userRepository = new UserRepository();
    this.userService = new userService(userRepository);
  }
  @Post()
  createUser(@Body() user: UserDTO): UserDTO {
    return this.userService.createUser(user);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return `Test`;
  }
}
