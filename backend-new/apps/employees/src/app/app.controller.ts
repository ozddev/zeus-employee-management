import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ReadEmployeeDto } from './dto/read-employee.dto';
import { ReadUserDto } from './dto/user/read-user.dto';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('employees')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'hello' })
  hello(data: string): string {
    return `Hello, ${data}`;
  }

  // @Get(':personalId')
  // async getEmployee(
  //   @Param('personalId') personalId: string,
  // ): Promise<ReadEmployeeDto> {
  //   return this.appService.getEmployeeByPersonalId(personalId);
  // }

  // @Get()
  // async getEmployees(): Promise<ReadEmployeeDto[]> {
  //   return this.appService.getEmployees();
  // }

  // @Post()
  // async createEmployee(
  //   @Body() createEmployeeDto: CreateEmployeeDto,
  // ): Promise<ReadEmployeeDto> {
  //   return this.appService.createEmployee(createEmployeeDto);
  // }

  // @Patch(':id')
  // async updateEmployee(
  //   @Param('id') id: string,
  //   @Body() updateEmployeeDto: UpdateEmployeeDto,
  // ): Promise<ReadEmployeeDto> {
  //   return this.appService.updateEmployee(id, updateEmployeeDto);
  // }

  // @Delete()
  // async deleteEmployees() {
  //   this.appService.deleteEmployees();
  // }

  // @Get('get-credentials/:personalId')
  // async getCredentials(
  //   @Param('personalId') personalId: string,
  // ): Promise<ReadUserDto> {
  //   return this.appService.getEmployeeCredentialsByPersonalId(personalId);
  // }
}
