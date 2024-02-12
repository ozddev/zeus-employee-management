import { Injectable } from '@nestjs/common';
import {
  CreateEmployeeDto,
  Employee,
  ReadEmployeeDto,
  ReadUserDto,
  UpdateEmployeeDto,
  ValidateUserDto,
} from '@app/common';
import { FilterQuery } from 'mongoose';
import { hashPassword } from '@app/common';
import { EmployeesRepository } from './employees.repository';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class EmployeesService {
  constructor(
    private readonly employeesRepository: EmployeesRepository,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {}

  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<ReadEmployeeDto | undefined> {
    createEmployeeDto.hash = await hashPassword(createEmployeeDto.hash);
    const schema = this.classMapper.map(
      createEmployeeDto,
      CreateEmployeeDto,
      Employee,
    );
    return this.classMapper.mapAsync(
      await this.employeesRepository.create({ schema }),
      Employee,
      ReadEmployeeDto,
    );
  }

  async getEmployees(): Promise<ReadEmployeeDto[] | undefined> {
    return this.classMapper.mapArrayAsync(
      await this.employeesRepository.find(),
      Employee,
      ReadEmployeeDto,
    );
  }

  async getEmployeeById(id: string): Promise<ReadEmployeeDto | undefined> {
    return this.classMapper.mapAsync(
      await this.employeesRepository.findOne({ _id: id }),
      Employee,
      ReadEmployeeDto,
    );
  }

  async getEmployeeByPersonalId(
    personalId: string,
  ): Promise<ReadEmployeeDto | undefined> {
    return this.classMapper.mapAsync(
      await this.employeesRepository.findOne({ personalId: personalId }),
      Employee,
      ReadEmployeeDto,
    );
  }

  async getUserCredentialsByPersonalId(
    personalId: string,
  ): Promise<ValidateUserDto | undefined> {
    return this.classMapper.mapAsync(
      await this.employeesRepository.findOne({ personalId: personalId }),
      Employee,
      ValidateUserDto,
    );
  }

  async updateEmployee(
    personalId: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<ReadEmployeeDto | undefined> {
    if (updateEmployeeDto.hash) {
      updateEmployeeDto.hash = await hashPassword(updateEmployeeDto.hash);
    }
    const schema = this.classMapper.map(
      updateEmployeeDto,
      UpdateEmployeeDto,
      Employee,
    );
    return this.classMapper.mapAsync(
      await this.employeesRepository.findOneAndUpdate(
        { personalId: personalId },
        schema,
      ),
      Employee,
      ReadEmployeeDto,
    );
  }

  async deleteEmployees(
    entityFilterQuery: FilterQuery<any> = {},
  ): Promise<boolean> {
    return this.employeesRepository.deleteMany(entityFilterQuery);
  }
}
