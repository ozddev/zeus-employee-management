import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
import { Module } from "@nestjs/common";
import { MongooseModule as BaseMongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [BaseMongooseModule.forRoot(process.env.MONGODB_URI],
  exports: [],
})
export class MongooseModule {}
    AuthModule,
    EmployeesModule
  ],
})
export class AppModule {}
