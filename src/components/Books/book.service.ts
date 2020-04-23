import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { BookEntity } from './entities/book.entity';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity) 
        private bookModel: Repository<BookEntity>
    ) {}

    async findAll(): Promise<BookEntity[]> {
        return this.bookModel.find();
    }

    async create(CreateBookDto: CreateBookDto): Promise<BookEntity> {
        return this.bookModel.save(CreateBookDto);
    }
}