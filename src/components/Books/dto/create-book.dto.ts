import { IsString, IsNumber, IsObject, IsNotEmpty } from 'class-validator';

export class CreateBookPublishedDto {
    @IsNotEmpty()
    @IsString()
    readonly publisher: string;

    @IsNotEmpty()
    @IsNumber()
    readonly year: number;
}

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
    @IsObject()
    published: CreateBookPublishedDto;

}