import { HolidayRequestDto } from '@app/common/dto/holiday-request/holiday-request.dto';
import { UserHolidayRequestDto } from '@app/common/dto/user/user-holiday-request.dto';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GatewayService {
  constructor(
    @Inject('EMPLOYEES_SERVICE') private employeesClient: ClientProxy,
    @Inject('MAILER_SERVICE') private mailerClient: ClientProxy,
  ) {}

  async getEmployeeByPersonalId(personalId: string): Promise<any> {
    const pattern = 'get_employee';
    return this.employeesClient.send(pattern, personalId);
  }

  async getEmployees(): Promise<any> {
    const pattern = 'get_employees';
    return this.employeesClient.send(pattern, {});
  }

  async sendHolidayRequestEmail(
    request: Request,
    holidayRequestDto: HolidayRequestDto,
  ): Promise<void> {
    const pattern = 'holiday_request';
    const userHolidayRequest: UserHolidayRequestDto =
      this.createUserHolidayRequestDto(request, holidayRequestDto);
    const promise = this.mailerClient.send(pattern, userHolidayRequest);
    const data = await firstValueFrom(promise);
    if (data) {
      Logger.log('Email was accepted.');
    } else {
      Logger.error('Email was not accepted.');
    }
  }

  private createUserHolidayRequestDto(
    request: Request,
    holidayRequestDto: HolidayRequestDto,
  ): UserHolidayRequestDto {
    const userHolidayRequest: UserHolidayRequestDto =
      new UserHolidayRequestDto();
    userHolidayRequest.from = holidayRequestDto.from;
    userHolidayRequest.until = holidayRequestDto.until;
    userHolidayRequest.personalId = request.user['personalId'];
    return userHolidayRequest;
  }
}
