import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BookService } from './book.service';
import { IBook } from './book.interface';

@Controller()
export class BookController {
    constructor(private readonly bookService: BookService) {}
  
  @Get('/books')
    async findAll(): Promise<IBook[]> {
        return this.bookService.findAll();
    }
  
  @Post('/api/books')
  async create(@Body() CreateBookDto: CreateBookDto) {
      return this.bookService.create(CreateBookDto);
  }
}