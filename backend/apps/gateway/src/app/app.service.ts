import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { catchError, firstValueFrom } from 'rxjs';
import { comparePasswords } from 'common/src/lib/helper';
import { User } from './dto/user.dto';
import { AxiosError } from 'axios';

@Injectable()
export class AppService {
  private readonly EMPLOYEES_URL: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly jwtService: JwtService,
  ) {
    this.EMPLOYEES_URL = process.env.EMPLOYEES_URL;
  }

  async validateUser(personalId: string, password: string) {
    const { data } = await firstValueFrom(
      this.httpService
        .get<User>(this.EMPLOYEES_URL + '/employees/get-credentials/' + personalId)
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened! ' + error;
          }),
        ),
    );
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
