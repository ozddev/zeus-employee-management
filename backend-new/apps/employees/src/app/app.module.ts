import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Employee,
  EmployeeSchema,
} from 'common/src/lib/schemas/employee.schema';
import { AppRepository } from './app.repository';
import { PassportModule } from '@nestjs/passport';
import { checkObjectIdIsValid } from './middlewares/validation.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
    ]),
    PassportModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppRepository],
  exports: [AppRepository],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(checkObjectIdIsValid).forRoutes();
  }
}
