import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsString()
    readonly fullName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string;
}