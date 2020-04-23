import { Entity, Column, ObjectIdColumn, ObjectID} from 'typeorm';
import { CreateBookPublishedDto } from '../dto/create-book.dto'

@Entity({ name: 'books' })
export class BookEntity {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    blogpost: string;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    published: CreateBookPublishedDto;
}