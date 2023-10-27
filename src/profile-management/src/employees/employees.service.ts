import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeesRepository } from './employees.repository';
import { Employee } from './schemas/employee.schema';
import { FilterQuery } from 'mongoose';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return this.employeesRepository.create({ createEmployeeDto });
  }

  async getEmployees(): Promise<Employee[]> {
    return this.employeesRepository.find({});
  }

  async getEmployeeById(id: string): Promise<Employee> {
    return this.employeesRepository.findOne({ _id: id });
  }

  async getEmployeeByPersonalId(personalId: string): Promise<Employee> {
    return this.employeesRepository.findOne({ personalId: personalId });
  }

  async updateEmployee(
    id: string,
    employeeUpdates: UpdateEmployeeDto,
  ): Promise<Employee> {
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
