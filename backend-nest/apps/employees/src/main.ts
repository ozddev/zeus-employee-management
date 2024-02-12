import { Logger } from '@nestjs/common';
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
  await app.listen();
  Logger.log(`🚀 Microservice is running`);
}

bootstrap();
