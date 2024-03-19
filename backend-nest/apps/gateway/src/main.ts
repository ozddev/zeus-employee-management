import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  app.enableCors({
    origin: process.env.FRONTEND_URL,
  });
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
