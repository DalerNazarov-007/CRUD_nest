import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/products/dto/user.dto';
import { ProductService } from 'src/products/products.service';


@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly productService: ProductService
  ) {}

  create(createUserDto: UserDto) {
    throw new Error('Method not implemented.');
  }

  register(registerUserDto: any) {
    const payload = { username: registerUserDto.username, sub: registerUserDto.id };
    const secret = this.configService.get<string>('JWT_ACCESS_SECRET_KEY');
    return {
      access_token: this.jwtService.sign(payload, { secret }),
    };
  }

  login(loginUserDto: any) {
    return this.register(loginUserDto);
  }
}