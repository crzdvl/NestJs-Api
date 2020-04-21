import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);  
    await app.useGlobalPipes(new ValidationPipe());
    await app.listen(process.env.PORT || 3000);
}
bootstrap();