import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductService } from "./products.service";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";


@Module({
    imports: [ConfigModule, JwtModule.register({})],
    controllers: [ProductsController],
    providers: [ProductService],
    exports: [ProductService]
})
export class productModule{}