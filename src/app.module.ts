import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { ProductService } from './products/products.service';
import { productModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}), productModule],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class AppModule {}
