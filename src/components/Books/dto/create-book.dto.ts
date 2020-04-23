import { IsString, IsArray, IsNotEmpty } from 'class-validator';

export class CreateBookDto {

    @IsNotEmpty()	
    @IsString()
    blogpost: string;

    @IsNotEmpty()	
    @IsString()
    title: string;

    @IsNotEmpty()	
    @IsString()
    author: string;

    @IsNotEmpty()	
    @IsArray()	
    published: Array <{
        publisher: string;
        year: number;
        }>;
}