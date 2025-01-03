import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

//This is Global Middleware. It will call on every request for every controller
function globalMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('This is Global Middleware');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('APIs')
    .addBearerAuth()
    .build();

  // Create Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Setup Swagger UI at the `/api` endpoint
  SwaggerModule.setup('docs', app, document);
  app.use(globalMiddleware);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
