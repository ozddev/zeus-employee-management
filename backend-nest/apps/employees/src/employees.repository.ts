import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository, Employee } from '@app/common';
import { Model } from 'mongoose';

@Injectable()
export class EmployeesRepository extends AbstractRepository<Employee> {
  constructor(@InjectModel(Employee.name) employeeModel: Model<Employee>) {
    super(employeeModel);
  }
}
