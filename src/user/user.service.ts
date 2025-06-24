import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ProductService } from 'src/products/products.service';


@Injectable()
export class UserService {
   constructor(
    private jwtService: JwtService, 
    private configService: ConfigService,
    private productService: ProductService
  ) {}
  register(registerUserDto: any) {
    return this.jwtService.sign({}, {secret:this.configService.get<string>('JWT_ACCESS_SECRET_KEY')});  
  }
  login(loginUserDto: any) {
    return `This action returns all user`;
  }
}