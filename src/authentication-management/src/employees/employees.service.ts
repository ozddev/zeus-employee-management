import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from './employees.repository';
import { Employee } from '../shared/schemas/employee.schema';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { FilterQuery } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Injectable({})
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  async getEmployeeById(id: string): Promise<Employee> {
    return this.employeesRepository.findOne({ id });
  }

  async getEmployeeByPersonalId(personalId: string): Promise<Employee> {
    return this.employeesRepository.findOne({ personalId });
  }

  async getEmployees(): Promise<Employee[]> {
    return this.employeesRepository.find({});
  }

  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    const hash = await this.hashPassword(createEmployeeDto.hash);
    return this.employeesRepository.create({
      personalId: createEmployeeDto.personalId,
      hash: hash,
    });
  }

  async updateEmployee(
    personalId: string,
    employeeUpdates: UpdateEmployeeDto,
  ): Promise<Employee> {
    return this.employeesRepository.findOneAndUpdate(
      { personalId },
      employeeUpdates,
    );
  }

  async deleteEmployees(
    entityFilterQuery: FilterQuery<Employee>,
  ): Promise<boolean> {
    return this.employeesRepository.deleteMany(entityFilterQuery);
  }

  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
}
