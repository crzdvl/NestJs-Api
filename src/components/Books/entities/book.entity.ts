import { Entity, Column, ObjectIdColumn, ObjectID} from 'typeorm';

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
    published: Array <{
        publisher: string;
        year: number;
        }>;
}