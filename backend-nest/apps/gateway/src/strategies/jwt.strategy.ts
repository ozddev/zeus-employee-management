import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PayloadDto, ReadUserDto } from '@app/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: configService.get<string>('JWT_IGNORE_EXPIRATION'),
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: PayloadDto): Promise<ReadUserDto> {
    return { personalId: payload.sub, roles: payload.roles };
  }
}
