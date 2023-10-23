import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { MongooseModule } from './shared/modules/mongoose.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule, EmployeesModule, AuthModule],
})
export class AppModule {}
