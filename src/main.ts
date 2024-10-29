import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

//This is Global Middleware. It will call on every request for every controller
function globalMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('This is Global Middleware');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleware);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
