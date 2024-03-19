import { UserHolidayRequestDto } from '@app/common/dto/user/user-holiday-request.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MailerService } from './mailer.service';

@Controller()
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @MessagePattern('holiday_request')
  async sendHolidayRequestEmail(
    userHolidayRequest: UserHolidayRequestDto,
  ): Promise<any> {
    return this.mailerService.sendHolidayRequestEmail(userHolidayRequest);
  }
}
