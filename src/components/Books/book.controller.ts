import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BookService } from './book.service';
import { BookEntity } from './entities/book.entity';

@Controller()
export class BookController {
    constructor(private readonly bookService: BookService) {}
  
  @Get('/books')
    async findAll(): Promise<BookEntity[]> {
        return this.bookService.findAll();
    }
  
  @Post('/api/books')
  async create(@Body() CreateBookDto: CreateBookDto) {
      return this.bookService.create(CreateBookDto);
  }
}