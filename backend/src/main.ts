import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { FastifyAdapter } from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })
  );

  // Enable CORS so the React dev server can call the API
  await app.enableCors({ origin: true, credentials: true });

  await app.listen(3000, "0.0.0.0");
  console.log(`API listening on http://localhost:3000`);
}
bootstrap();
