import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { MessagePattern } from '@nestjs/microservices';
import {
  CreateEmployeeDto,
  ReadEmployeeDto,
  UpdateEmployeeDto,
  ValidateUserDto,
} from '@app/common';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
  }),
)
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @MessagePattern({ cmd: 'hello' })
  async hello(data: string): Promise<string> {
    return `Hello, ${data}`;
  }

  @MessagePattern({ cmd: 'get_employee' })
  async getEmployee(personalId: string): Promise<ReadEmployeeDto | undefined> {
    return this.employeesService.getEmployeeByPersonalId(personalId);
  }

  @MessagePattern({ cmd: 'get_employees' })
  async getEmployees(): Promise<ReadEmployeeDto[] | undefined> {
    return this.employeesService.getEmployees();
  }

  @MessagePattern({ cmd: 'get_credentials' })
  async getCredentials(personalId: string): Promise<ValidateUserDto | undefined> {
    return this.employeesService.getUserCredentialsByPersonalId(personalId);
  }

  // @Post()
  // async createEmployee(
  //   @Body() createEmployeeDto: CreateEmployeeDto,
  // ): Promise<ReadEmployeeDto> {
  //   return this.employeesService.createEmployee(createEmployeeDto);
  // }

  @MessagePattern({ cmd: 'update_employee' })
  async updateEmployee(
    employee: UpdateEmployeeDto,
  ): Promise<ReadEmployeeDto | undefined> {
    return this.employeesService.updateEmployee(employee.personalId, employee);
  }

  // @Delete()
  // async deleteEmployees() {
  //   this.employeesService.deleteEmployees();
  // }

  // @Get('get-credentials/:personalId')
  // async getCredentials(
  //   @Param('personalId') personalId: string,
  // ): Promise<ReadUserDto> {
  //   return this.employeesService.getUserCredentialsByPersonalId(personalId);
  // }
}
