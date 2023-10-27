import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePasswords } from 'src/shared/helper';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(personalId: string, password: string) {
    const user =
      await this.usersService.getUserByPersonalId(personalId);
    if (!user) {
      return null;
    }

    const isPasswordMatched = await comparePasswords(password, user.hash);
    if (!isPasswordMatched) {
      return null;
    }

    const { hash, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { sub: user._doc.personalId, roles: user._doc.roles };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
