import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { User } from '../dto/user.dto';
import { firstValueFrom } from 'rxjs';
import { comparePasswords } from 'common/src/lib/utils/hashing';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('EMPLOYEES_SERVICE') private employeesClient: ClientProxy
  ) {}

  async validateUser(personalId: string, password: string) {
    const pattern = { cmd: 'get_credentials' };
    const data: User = await firstValueFrom(
      this.employeesClient.send(pattern, personalId)
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

  async login(user: any) {
    const payload = { sub: user.personalId, roles: user.roles };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
