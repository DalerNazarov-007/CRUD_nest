import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/products/dto/user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() registerUserDto: any) {
    return this.userService.register(registerUserDto);
  }
  @Post('login')
  login(@Body() userDto: UserDto) {
    return this.userService.login(userDto);
  }
}
