import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AppService } from '../app.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private appService: AppService) {
    super({ usernameField: 'personalId' });
  }

  async validate(personalId: string, password: string): Promise<any> {
    const employee = await this.appService.validateUser(personalId, password);
    if (!employee) {
      throw new UnauthorizedException();
    }
    return employee;
  }
}
