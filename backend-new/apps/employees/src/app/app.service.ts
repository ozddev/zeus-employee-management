import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from 'common/src/lib/schemas/employee.schema';
import { FilterQuery } from 'mongoose';
import { hashPassword } from 'common/src/lib/utils/hashing';
import { ReadEmployeeDto } from './dto/read-employee.dto';
import { ReadUserDto } from './dto/user/read-user.dto';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  async createEmployee(
    createEmployeeDto: CreateEmployeeDto
  ): Promise<ReadEmployeeDto | undefined> {
    createEmployeeDto.hash = await hashPassword(createEmployeeDto.hash);
    return this.appRepository.create({ createEmployeeDto });
  }

  async getEmployees(): Promise<ReadEmployeeDto[] | undefined> {
    return this.appRepository.find();
  }

  async getEmployeeById(id: string): Promise<ReadEmployeeDto | undefined> {
    return this.appRepository.findOne({ _id: id });
  }

  async getEmployeeByPersonalId(
    personalId: string
  ): Promise<ReadEmployeeDto | undefined> {
    return this.appRepository.findOne({ personalId: personalId });
  }

  async getUserCredentialsByPersonalId(
    personalId: string
  ): Promise<ReadUserDto | undefined> {
    return this.appRepository.findOne({ personalId: personalId });
  }

  async updateEmployee(
    personalId: string,
    updateEmployeeDto: UpdateEmployeeDto
  ): Promise<ReadEmployeeDto | undefined> {
    if (updateEmployeeDto.hash) {
      updateEmployeeDto.hash = await hashPassword(updateEmployeeDto.hash);
    }
    return this.appRepository.findOneAndUpdate(
      { personalId: personalId },
      updateEmployeeDto
    );
  }

  async deleteEmployees(
    entityFilterQuery: FilterQuery<Employee> = {}
  ): Promise<boolean> {
    return this.appRepository.deleteMany(entityFilterQuery);
  }
}
