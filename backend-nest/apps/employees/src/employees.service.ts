import { Injectable } from '@nestjs/common';
import {
  CreateEmployeeDto,
  DeleteEmployeeDto,
  ReadEmployeeDto,
  ReadUserDto,
  UpdateEmployeeDto,
} from '@app/common';
import { FilterQuery } from 'mongoose';
import { hashPassword } from '@app/common';
import { EmployeesRepository } from './employees.repository';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<ReadEmployeeDto | undefined> {
    createEmployeeDto.hash = await hashPassword(createEmployeeDto.hash);
    return this.employeesRepository.create({ createEmployeeDto });
  }

  async getEmployees(): Promise<ReadEmployeeDto[] | undefined> {
    return this.employeesRepository.find();
  }

  async getEmployeeById(id: string): Promise<ReadEmployeeDto | undefined> {
    return this.employeesRepository.findOne({ _id: id });
  }

  async getEmployeeByPersonalId(
    personalId: string,
  ): Promise<ReadEmployeeDto | undefined> {
    return this.employeesRepository.findOne({ personalId: personalId });
  }

  async getUserCredentialsByPersonalId(
    personalId: string,
  ): Promise<ReadUserDto | undefined> {
    return this.employeesRepository.findOne({ personalId: personalId });
  }

  async updateEmployee(
    personalId: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<ReadEmployeeDto | undefined> {
    if (updateEmployeeDto.hash) {
      updateEmployeeDto.hash = await hashPassword(updateEmployeeDto.hash);
    }
    return this.employeesRepository.findOneAndUpdate(
      { personalId: personalId },
      updateEmployeeDto,
    );
  }

  async deleteEmployees(
    entityFilterQuery: FilterQuery<DeleteEmployeeDto> = {},
  ): Promise<boolean> {
    return this.employeesRepository.deleteMany(entityFilterQuery);
  }
}
