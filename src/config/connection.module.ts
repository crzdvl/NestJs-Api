import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://crzdvl:WynxZtwF@cluster0-fnvr2.mongodb.net/ApiDB?retryWrites=true&w=majority')],
})
export class DBModule {}