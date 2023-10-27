import { Module } from '@nestjs/common';
import { MongooseModule } from './shared/modules/mongoose.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule, AuthModule, UsersModule],
})
export class AppModule {}
