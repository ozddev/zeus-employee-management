import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { EmployeesModule } from './employees.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EmployeesModule,
    {
      transport: Transport.TCP,
    },
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
  Logger.log(
    `🚀 Microservice is running`
  );
}

bootstrap();
