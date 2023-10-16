import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { MongooseModule } from './shared/modules/mongoose.module';

@Module({
  imports: [MongooseModule, EmployeesModule],
})
export class AppModule {}
