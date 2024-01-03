import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { HandlerService } from './handler.service';
import { Employee } from './schemas/employee.schema';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';

@Controller('api')
@UseGuards(JwtAuthGuard)
export class HandlerController {
  constructor(private readonly handlerService: HandlerService) {}

  @Get(':personalId')
  async getEmployee(
    @Param('personalId') personalId: string,
  ): Promise<Employee> {
    return this.handlerService.getEmployeeByPersonalId(personalId);
  }

  @Get()
  async getEmployees(): Promise<Employee[]> {
    return this.handlerService.getEmployees();
  }

}
