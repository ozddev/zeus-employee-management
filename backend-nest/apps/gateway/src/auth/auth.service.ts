import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { JwtTokenDto, ReadUserDto, ValidateUserDto } from '@app/common';
import { firstValueFrom } from 'rxjs';
import { comparePasswords } from '@app/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('EMPLOYEES_SERVICE') private employeesClient: ClientProxy,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {}

  async validateUser(
    personalId: string,
    password: string,
  ): Promise<ReadUserDto> {
    const pattern = { cmd: 'get_credentials' };
    const data: ValidateUserDto = await firstValueFrom(
      this.employeesClient.send(pattern, personalId),
    );

    if (!data) {
      return null;
    }

    const isPasswordMatched = await comparePasswords(password, data.hash);
    if (!isPasswordMatched) {
      return null;
    }

    return this.classMapper.mapAsync(data, ValidateUserDto, ReadUserDto);
  }

  async login(user: ReadUserDto): Promise<JwtTokenDto> {
    const payload = { sub: user.personalId, roles: user.roles };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
