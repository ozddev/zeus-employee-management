import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeesService } from 'src/employees/employees.service';
import { comparePasswords } from 'src/shared/helper';

@Injectable()
export class AuthService {
  constructor(
    private readonly employeesService: EmployeesService,
    private readonly jwtService: JwtService,
  ) {}

  async validateEmployee(personalId: string, password: string) {
    const employee =
      await this.employeesService.getEmployeeByPersonalId(personalId);
    if (!employee) {
      return null;
    }

    const isPasswordMatched = await comparePasswords(password, employee.hash);
    if (!isPasswordMatched) {
      return null;
    }

    const { hash, ...result } = employee;
    return result;
  }

  async login(employee: any) {
    const payload = { sub: employee._doc._id, roles: employee._doc.roles };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
