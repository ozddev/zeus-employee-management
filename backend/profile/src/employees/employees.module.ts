import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { EmployeesRepository } from './employees.repository';
import { PassportModule } from '@nestjs/passport';
import { checkObjectIdIsValid } from '@middlewares/validation.middleware';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { EmployeeProfile } from './profile/employee.profile';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
    ]),
    PassportModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes()
    })
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeesRepository, EmployeeProfile],
  exports: [EmployeesRepository],
})
export class EmployeesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(checkObjectIdIsValid).forRoutes();
  }
}
