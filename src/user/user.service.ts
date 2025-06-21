import { Injectable } from '@nestjs/common';


@Injectable()
export class UserService {
  register(registerUserDto: any) {
    return 'This action adds a new user';
  }

  login(loginUserDto: any) {
    return `This action returns all user`;
  }
}
