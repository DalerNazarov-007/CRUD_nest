import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateProductDto{
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    name: string;

    @IsString()
    @MinLength(3)   
    @MaxLength(20)
    category: string;
}