import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    /*
    Warning for the AC team:
    When whitelist is true, NestJS will automatically remove any properties from the incoming data that are not defined in your DTO class.
    When forbidNonWhitelisted is true, instead of removing the extra properties, NestJS will throw an error if it finds any field not defined in your DTO.
    When transform is true, NestJS will automatically transform payloads to be objects typed according to their DTO classes.
    
    # hint for the future: while making users module add a dto folder inside users module and define your dtos there.
    # TODO: add common dtos for requests and responses
  */

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
  
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();