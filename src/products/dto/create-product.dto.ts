import { IsString, isString, Max, MaxLength, MinLength } from "class-validator";

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)  
  name: string;
  
  price: number;

  @IsString()
  @MinLength(10)
  @MaxLength(500)
  description: string;
}