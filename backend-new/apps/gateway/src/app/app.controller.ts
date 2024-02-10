import { AppService } from './app.service';
import {
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  helloworld() {
    return 'Hello World!';
  }

  @UseGuards(JwtAuthGuard)
  @Get('api/employees/:personalId')
  async getEmployee(@Param('personalId') personalId: string): Promise<any> {
    return this.appService.getEmployeeByPersonalId(personalId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('api/employees')
  async getEmployees(): Promise<any> {
    return this.appService.getEmployees();
  }
}
