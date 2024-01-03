import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { AbstractRepository } from 'src/database/abstract.repository';

@Injectable()
export class EmployeesRepository extends AbstractRepository<Employee> {
  constructor(@InjectModel(Employee.name) employeeModel: Model<Employee>) {
    super(employeeModel);
  }
}
