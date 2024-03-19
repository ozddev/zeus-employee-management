import { ReadEmployeeDto } from '@app/common';
import { UserHolidayRequestDto } from '@app/common/dto/user/user-holiday-request.dto';
import { MailerService as BaseMailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { isNotEmpty } from 'class-validator';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MailerService {
  constructor(
    private mailerService: BaseMailerService,
    @Inject('EMPLOYEES_SERVICE') private employeesClient: ClientProxy,
  ) {}

  async sendHolidayRequestEmail(
    userHolidayRequest: UserHolidayRequestDto,
  ): Promise<boolean> {
    const employee: ReadEmployeeDto = await this.getEmployeeForRequest(
      userHolidayRequest.personalId,
    );
    const response = await this.mailerService.sendMail({
      to: process.env.EMAIL_TO_ADDRESS,
      from: process.env.EMAIL_FROM_ADDRESS,
      subject: 'Holiday Request',
      text: `${employee.firstName} ${employee.lastName} has requested a holiday starting from ${userHolidayRequest.from} until ${userHolidayRequest.until}`,
    });
    Logger.log('Email sent with Mailer Service');
    Logger.debug(response);
    return isNotEmpty(response['accepted']);
  }

  async getEmployeeForRequest(personalId: string) {
    const pattern = 'get_employee';
    const response = this.employeesClient.send(pattern, personalId);
    return firstValueFrom(response);
  }
}
