import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { HandlerModule } from './handler/handler.module';

@Module({
  imports: [AuthModule, HandlerModule],
})
export class AppModule {}
