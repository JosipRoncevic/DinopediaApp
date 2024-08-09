import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true,
  });

  app.use(
    session({
      secret: 'keyboard',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}

bootstrap();
