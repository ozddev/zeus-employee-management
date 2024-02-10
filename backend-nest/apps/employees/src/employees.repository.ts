import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from '@app/common';
import { Model } from 'mongoose';
import { AbstractRepository } from '@app/common';

@Injectable()
export class EmployeesRepository extends AbstractRepository<Employee> {
  constructor(@InjectModel(Employee.name) employeeModel: Model<Employee>) {
    super(employeeModel);
  }
}
