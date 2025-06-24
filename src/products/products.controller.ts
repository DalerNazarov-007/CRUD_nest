import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ProductService } from "./products.service";
import { AuthGuard } from "src/guard/auth.guard";
import { CreateProductDto } from "./dto/create-products.dto";

@Controller('products')
export class ProductsController{
    constructor(private readonly productService: ProductService){}

    @UseGuards(AuthGuard)
    @Get()
    getProducts(){
        return this.productService.get();
    }

    @UseGuards(AuthGuard)
    @Post()
    createProducts(@Body() body: CreateProductDto){
        return this.productService.create(body)
    }


    @UseGuards(AuthGuard)
    @Put('/:id')
    updateProduct(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: CreateProductDto
    ){
        return this.productService.update(id, body);
    }


    @UseGuards(AuthGuard)
    @Get('/:id')
    getById(@Param('id', ParseIntPipe) id : number){
        return this.productService.getById(id);
    }


    @UseGuards(AuthGuard)
    @Delete('/:id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.productService.delete(id);
    }
}