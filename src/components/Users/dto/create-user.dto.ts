import { IsString, IsNotEmpty, IsEmail, IsMobilePhone, IsBooleanString } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()	
    @IsString()
    firstName: string;
    
    @IsNotEmpty()	
    @IsString()
    lastName: string;
    
    @IsNotEmpty()	
    @IsEmail()
    email: string;
    
    @IsNotEmpty()	
    @IsMobilePhone()
    phone: number;
    
    @IsNotEmpty()	
    @IsBooleanString()	
    isAdmin: boolean;
    
    @IsBooleanString()
    verified: boolean;
}