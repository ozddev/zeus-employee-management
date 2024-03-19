import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MailerModule } from './mailer.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailerModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL],
        queue: 'holiday-request',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
  Logger.log(`🚀 Mailer Microservice is running`);
}

bootstrap();
