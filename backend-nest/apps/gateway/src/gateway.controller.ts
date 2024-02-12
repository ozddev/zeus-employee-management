import { GatewayService } from './gateway.service';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ReadEmployeeDto } from '@app/common';

@Controller()
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Get('/')
  helloworld() {
    return 'Hello World!';
  }

  @UseGuards(JwtAuthGuard)
  @Get('api/employees/:personalId')
  async getEmployee(@Param('personalId') personalId: string): Promise<ReadEmployeeDto | undefined> {
    return this.gatewayService.getEmployeeByPersonalId(personalId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('api/employees')
  async getEmployees(): Promise<ReadEmployeeDto[] | undefined> {
    return this.gatewayService.getEmployees();
  }
}
