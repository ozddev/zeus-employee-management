import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeesService } from 'src/employees/employees.service';
import * as bcrypt from 'bcrypt';
import { Employee } from 'src/employees/schemas/employee.schema';

@Injectable({})
export class AuthService {
  constructor(
    private readonly employeesService: EmployeesService,
    private readonly jwtService: JwtService,
  ) {}

  async validateEmployee(
    personalId: string, password: string
  ) {
    const employee = await this.employeesService.getEmployeeByPersonalId(
      personalId,
    );
    if (!employee) {
      return null;
    }

    const isPasswordMatched = await bcrypt.compare(
      password,
      employee.hash,
    );

    if (!isPasswordMatched) {
      return null;
    }

    const { hash, ...result } = employee;
    return result;
  }
  
  async login(employee: any) {
    const payload = { sub: employee._doc.personalId };
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}
