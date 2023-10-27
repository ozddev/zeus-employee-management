import { Module } from '@nestjs/common';
import { MongooseModule } from './shared/modules/mongoose.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [MongooseModule, EmployeesModule],
})
export class AppModule {}
