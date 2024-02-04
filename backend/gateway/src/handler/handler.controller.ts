import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { HandlerService } from './handler.service';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';

@Controller('api')
@UseGuards(JwtAuthGuard)
export class HandlerController {
  constructor(private readonly handlerService: HandlerService) {}

  @Get('employees/:personalId')
  async getEmployee(
    @Param('personalId') personalId: string,
  ): Promise<any> {
    return this.handlerService.getEmployeeByPersonalId(personalId);
  }

  @Get('employees')
  async getEmployees(): Promise<any> {
    return this.handlerService.getEmployees();
  }
}
