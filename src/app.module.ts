import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { UserModule } from './components/Users/user.module';
import { BookModule } from './components/Books/book.module';
import { DBModule } from './config/connection.module';

@Module({
    imports: [
        DBModule,
        UserModule,
        BookModule,
    ],
    providers: [
        {
            provide: APP_PIPE,
            useClass: ValidationPipe,
        },
    ],
})
export class AppModule {}