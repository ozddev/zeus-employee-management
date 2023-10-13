import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { EmployeesService } from "src/employees/employees.service";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from "bcrypt";

@Injectable({})
export class AuthService {
    constructor(
        private readonly employeesService: EmployeesService,
        private readonly jwtService: JwtService
    ) {}

    async validateEmployee(loginDto: LoginDto): Promise<{ access_token: string }> {
        const employee = await this.employeesService.getEmployeeByPersonalId(loginDto.personalId);
        if (!employee) {
            throw new UnauthorizedException(' Invalid Personal ID or password');
        }
        
        const isPasswordMatched = await bcrypt.compare(loginDto.password, employee.hash);

        if (!isPasswordMatched) {
            throw new UnauthorizedException(' Invalid Personal ID or password');
        }

        const payload = { id: employee.personalId };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}
