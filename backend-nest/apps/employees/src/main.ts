import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { EmployeesModule } from './employees.module';

async function bootstrap() {
  const app = await NestFactory.create(EmployeesModule);
  const TCPMicroservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { port: Number(process.env.PORT) },
  });
  const rabbitMQMicroservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'holiday-request',
      queueOptions: {
        durable: false,
      },
    },
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.startAllMicroservices();
  await app.listen(process.env.PORT);
  Logger.log(`🚀 Employees Microservice is running`);
}

bootstrap();
