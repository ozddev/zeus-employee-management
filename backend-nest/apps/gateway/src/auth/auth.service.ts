import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { JwtTokenDto, ReadUserDto, ValidateUserDto } from '@app/common';
import { firstValueFrom } from 'rxjs';
import { comparePasswords } from '@app/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('EMPLOYEES_SERVICE') private employeesClient: ClientProxy,
  ) {}

  async validateUser(personalId: string, password: string): Promise<ReadUserDto> {
    const pattern = { cmd: 'get_credentials' };
    const data: ValidateUserDto = await firstValueFrom(
      this.employeesClient.send(pattern, personalId),
    );
    console.log(data);

    if (!data) {
      return null;
    }

    const isPasswordMatched = await comparePasswords(password, data.hash);
    if (!isPasswordMatched) {
      return null;
    }

    const { hash, ...result } = data;
    return result;
  }

  async login(user: ReadUserDto): Promise<JwtTokenDto> {
    const payload = { sub: user.personalId, roles: user.roles };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
