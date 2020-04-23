import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mongodb',
        url: 'mongodb+srv://crzdvl:WynxZtwF@cluster0-fnvr2.mongodb.net/ApiDB?retryWrites=true&w=majority',
        useUnifiedTopology: true,
        useNewUrlParser: true,
        entities: ["dist/**/*.entity{.ts,.js}"],
    })],
})
export class DBModule {}