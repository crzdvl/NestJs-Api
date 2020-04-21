import { IsString, IsEmail, IsMobilePhone, IsBooleanString, IsNotEmpty } from 'class-validator';

export class CreateBookDto {

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