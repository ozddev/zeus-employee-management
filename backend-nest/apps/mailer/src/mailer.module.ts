import { MailerModule as BaseMailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MailerController } from './mailer.controller';
import { MailerService } from './mailer.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './apps/mailer/.env',
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: 'EMPLOYEES_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL],
          queue: 'holiday-request',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    BaseMailerModule.forRoot({
      transport: {
        host: process.env.SENDGRID_HOST,
        port: Number(process.env.SENDGRID_PORT),
        secure: true,
        auth: {
          user: process.env.SENDGRID_API_USER,
          pass: process.env.SENDGRID_API_KEY,
        },
      },
    }),
  ],
  controllers: [MailerController],
  providers: [MailerService],
})
export class MailerModule {}
