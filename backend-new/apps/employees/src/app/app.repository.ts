import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from 'common/src/lib/schemas/employee.schema';
import { Model } from 'mongoose';
import { AbstractRepository } from 'common/src/lib/database/abstract.repository';

@Injectable()
export class AppRepository extends AbstractRepository<Employee> {
  constructor(@InjectModel(Employee.name) employeeModel: Model<Employee>) {
    super(employeeModel);
  }
}
