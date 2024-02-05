import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { AppRepository } from './app.repository';
import { Employee } from 'common/src/lib/schemas/employee.schema';
import { FilterQuery } from 'mongoose';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { ReadEmployeeDto } from './dto/read-employee.dto';
import { ReadUserDto } from './dto/user/read-user.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly appRepository: AppRepository,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {}

  // async createEmployee(
  //   createEmployeeDto: CreateEmployeeDto,
  // ): Promise<ReadEmployeeDto | undefined> {
  //   createEmployeeDto.hash = await hashPassword(createEmployeeDto.hash);
  //   const schema = this.classMapper.map(
  //     createEmployeeDto,
  //     CreateEmployeeDto,
  //     Employee,
  //   );
  //   return this.classMapper.mapAsync(
  //     await this.appRepository.create({ schema }),
  //     Employee,
  //     ReadEmployeeDto,
  //   );
  // }

  async getEmployees(): Promise<ReadEmployeeDto[]> {
    return this.classMapper.mapArrayAsync(
      await this.appRepository.find(),
      Employee,
      ReadEmployeeDto,
    );
  }

  async getEmployeeById(id: string): Promise<ReadEmployeeDto | undefined> {
    return this.classMapper.mapAsync(
      await this.appRepository.findOne({ _id: id }),
      Employee,
      ReadEmployeeDto,
    );
  }

  async getEmployeeByPersonalId(
    personalId: string,
  ): Promise<ReadEmployeeDto | undefined> {
    return this.classMapper.mapAsync(
      await this.appRepository.findOne({ personalId: personalId }),
      Employee,
      ReadEmployeeDto,
    );
  }

  async getEmployeeCredentialsByPersonalId(
    personalId: string,
  ): Promise<ReadUserDto | undefined> {
    return this.classMapper.mapAsync(
      await this.appRepository.findOne({ personalId: personalId }),
      Employee,
      ReadUserDto,
    );
  }

  // async updateEmployee(
  //   id: string,
  //   updateEmployeeDto: UpdateEmployeeDto,
  // ): Promise<ReadEmployeeDto | undefined> {
  //   if (updateEmployeeDto.hash) {
  //     updateEmployeeDto.hash = await hashPassword(updateEmployeeDto.hash);
  //   }
  //   const schema = this.classMapper.map(
  //     updateEmployeeDto,
  //     UpdateEmployeeDto,
  //     Employee,
  //   );
  //   return this.classMapper.mapAsync(
  //     await this.appRepository.findOneAndUpdate({ _id: id }, schema),
  //     Employee,
  //     ReadEmployeeDto,
  //   );
  // }

  async deleteEmployees(
    entityFilterQuery: FilterQuery<Employee> = {},
  ): Promise<boolean> {
    return this.appRepository.deleteMany(entityFilterQuery);
  }
}
