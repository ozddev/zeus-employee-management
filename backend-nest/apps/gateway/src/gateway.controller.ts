import { GatewayService } from './gateway.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ReadEmployeeDto } from '@app/common';
import { HolidayRequestDto } from '@app/common/dto/holiday-request/holiday-request.dto';

@Controller('api')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Get()
  helloworld() {
    return 'Hello World!';
  }

  @UseGuards(JwtAuthGuard)
  @Get('employees/:personalId')
  async getEmployee(
    @Param('personalId') personalId: string,
  ): Promise<ReadEmployeeDto | undefined> {
    return this.gatewayService.getEmployeeByPersonalId(personalId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('employees')
  async getEmployees(): Promise<ReadEmployeeDto[] | undefined> {
    return this.gatewayService.getEmployees();
  }

  @UseGuards(JwtAuthGuard)
  @Get('holiday-request')
  async sendHolidayRequestEmail(
    @Request() req,
    @Body(new ValidationPipe()) holidayRequestDto: HolidayRequestDto,
  ): Promise<void> {
    await this.gatewayService.sendHolidayRequestEmail(req, holidayRequestDto);
  }
}
