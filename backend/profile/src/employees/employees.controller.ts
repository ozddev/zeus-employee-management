import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ReadEmployeeDto } from './dto/read-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get(':personalId')
  async getEmployee(
    @Param('personalId') personalId: string,
  ): Promise<ReadEmployeeDto> {
    return this.employeesService.getEmployeeByPersonalId(personalId);
  }

  @Get()
  async getEmployees(): Promise<ReadEmployeeDto[]> {
    return this.employeesService.getEmployees();
  }

  @Post()
  async createEmployee(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<ReadEmployeeDto> {
    return this.employeesService.createEmployee(createEmployeeDto);
  }

  @Patch(':id')
  async updateEmployee(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<ReadEmployeeDto> {
    return this.employeesService.updateEmployee(id, updateEmployeeDto);
  }

  @Delete()
  async deleteEmployees() {
    this.employeesService.deleteEmployees();
  }
}
