import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from '../shared/schemas/employee.schema';
import { Model } from 'mongoose';
import { AbstractRepository } from 'src/database/entity.repository';

@Injectable()
export class EmployeesRepository extends AbstractRepository<Employee> {
  constructor(@InjectModel(Employee.name) employeeModel: Model<Employee>) {
    super(employeeModel);
  }
}
