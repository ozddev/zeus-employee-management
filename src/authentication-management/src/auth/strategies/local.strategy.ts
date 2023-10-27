import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'personalId' });
  }

  async validate(personalId: string, password: string): Promise<any> {
    const employee = await this.authService.validateUser(personalId, password);
    if (!employee) {
      throw new UnauthorizedException();
    }
    return employee;
  }
}
