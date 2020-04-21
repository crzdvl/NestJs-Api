import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { IBook } from './book.interface';

@Injectable()
export class BookService {
    constructor(@InjectModel('Book') private readonly bookModel: Model<IBook>) {}

    async findAll(): Promise<IBook[]> {
        return this.bookModel.find().exec();
    }

    async create(CreateBookDto: CreateBookDto): Promise<IBook> {
        const createdCat = new this.bookModel(CreateBookDto);
        return createdCat.save();
    }
}