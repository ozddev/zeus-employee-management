import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from './employees.repository';
import { Employee } from '../shared/schemas/employee.schema';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { FilterQuery } from 'mongoose';
import { hashPassword } from 'src/shared/helper';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  async getEmployeeById(id: string): Promise<Employee> {
    return this.employeesRepository.findOne({ _id: id });
  }

  async getEmployeeByPersonalId(personalId: string): Promise<Employee> {
    return this.employeesRepository.findOne({ personalId: personalId });
  }

  async getEmployees(): Promise<Employee[]> {
    return this.employeesRepository.find({});
  }

  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    createEmployeeDto.hash = await hashPassword(createEmployeeDto.hash);
    return this.employeesRepository.create({ createEmployeeDto });
  }

  async updateEmployee(
    id: string,
    employeeUpdates: UpdateEmployeeDto,
  ): Promise<Employee> {
    if (employeeUpdates.hash) {
      employeeUpdates.hash = await hashPassword(employeeUpdates.hash);
    }
    return this.employeesRepository.findOneAndUpdate(
      { _id: id },
      employeeUpdates,
    );
  }

  async deleteEmployees(
    entityFilterQuery: FilterQuery<Employee>,
  ): Promise<boolean> {
    return this.employeesRepository.deleteMany(entityFilterQuery);
  }
}
