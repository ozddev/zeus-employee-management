import { Module } from '@nestjs/common';
import { MongooseModule } from './database/mongoose.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [MongooseModule, EmployeesModule],
})
export class AppModule {}
