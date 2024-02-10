import { Controller } from '@nestjs/common';
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
  async hello(data: string): Promise<string> {
    return `Hello, ${data}`;
  }

  @MessagePattern({ cmd: 'get_employee' })
  async getEmployee(personalId: string): Promise<ReadEmployeeDto | undefined> {
    return this.appService.getEmployeeByPersonalId(personalId);
  }

  @MessagePattern({ cmd: 'get_employees' })
  async getEmployees(): Promise<ReadEmployeeDto[] | undefined> {
    return this.appService.getEmployees();
  }

  @MessagePattern({ cmd: 'get_credentials' })
  async getCredentials(personalId: string): Promise<ReadUserDto | undefined> {
    return this.appService.getUserCredentialsByPersonalId(personalId);
  }

  // @Post()
  // async createEmployee(
  //   @Body() createEmployeeDto: CreateEmployeeDto,
  // ): Promise<ReadEmployeeDto> {
  //   return this.appService.createEmployee(createEmployeeDto);
  // }

  @MessagePattern({ cmd: 'update_employee' })
  async updateEmployee(
    employee: UpdateEmployeeDto
  ): Promise<ReadEmployeeDto | undefined> {
    return this.appService.updateEmployee(employee.personalId, employee);
  }

  // @Delete()
  // async deleteEmployees() {
  //   this.appService.deleteEmployees();
  // }

  // @Get('get-credentials/:personalId')
  // async getCredentials(
  //   @Param('personalId') personalId: string,
  // ): Promise<ReadUserDto> {
  //   return this.appService.getUserCredentialsByPersonalId(personalId);
  // }
}
