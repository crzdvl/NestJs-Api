import { Entity, Column, ObjectIdColumn, ObjectID} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: number;

    @Column()
    isAdmin: boolean;

    @Column()
    verified: boolean;
}