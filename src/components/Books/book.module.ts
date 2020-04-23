import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
    imports: [TypeOrmModule.forFeature([BookEntity])],
    controllers: [BookController],
    providers: [BookService],
})
export class BookModule {}
