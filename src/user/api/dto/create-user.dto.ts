import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { randomUUID } from "crypto";
import { v4 as uuid } from 'uuid';

export class CreateUserDto {
    @IsString()
    public name: string;
    @IsString()
    public lastName: string;
    @IsEmail()
    public email: string;
}