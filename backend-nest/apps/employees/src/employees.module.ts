import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule, Employee, EmployeeSchema } from '@app/common';
import { EmployeesRepository } from './employees.repository';
import { PassportModule } from '@nestjs/passport';
import { checkObjectIdIsValid } from './middlewares/validation.middleware';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/employees/.env',
    }),
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
    ]),
    DatabaseModule,
    PassportModule,
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeesRepository],
  exports: [EmployeesRepository],
})
export class EmployeesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(checkObjectIdIsValid).forRoutes();
  }
}
