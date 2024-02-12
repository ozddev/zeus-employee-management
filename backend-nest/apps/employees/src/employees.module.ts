import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule, Employee, EmployeeSchema } from '@app/common';
import { EmployeesRepository } from './employees.repository';
import { PassportModule } from '@nestjs/passport';
import { checkObjectIdIsValid } from './middlewares/validation.middleware';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { ConfigModule } from '@nestjs/config';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { EmployeeProfile } from '@app/common/profile/employee.profile';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/employees/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
    ]),
    PassportModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
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
