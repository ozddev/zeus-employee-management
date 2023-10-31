import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeesRepository } from './employees.repository';
import { Employee } from './schemas/employee.schema';
import { FilterQuery } from 'mongoose';
import { hashPassword } from 'src/employees/helper';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    createEmployeeDto.hash = await hashPassword(createEmployeeDto.hash);
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
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    if (updateEmployeeDto.hash) {
      updateEmployeeDto.hash = await hashPassword(updateEmployeeDto.hash);
    }
    return this.employeesRepository.findOneAndUpdate(
      { _id: id },
      updateEmployeeDto,
    );
  }

  async deleteEmployees(
    entityFilterQuery: FilterQuery<Employee>,
  ): Promise<boolean> {
    return this.employeesRepository.deleteMany(entityFilterQuery);
  }
}
