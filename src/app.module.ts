import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { ProductService } from './products/products.service';
import { productModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';



@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}), JwtModule.register({global:true}), productModule, UserModule],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class AppModule {}
