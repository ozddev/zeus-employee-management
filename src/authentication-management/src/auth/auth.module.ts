import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt/dist";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { MongooseModule } from "@nestjs/mongoose";
import { Employee, EmployeeSchema } from "src/employees/schemas/employee.schema";
import { ConfigService } from "@nestjs/config";
import { EmployeesService } from "src/employees/employees.service";
import { EmployeesModule } from "src/employees/employees.module";
import { EmployeesRepository } from "src/employees/employees.repository";

@Module({
    imports: [
        EmployeesModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    secret: config.get<string>('JWT_SECRET'),
                    signOptions: {
                        expiresIn: config.get<string | number>('JWT_EXPIRES')
                    }
                }
            }
        }),
        MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }])
    ],
    controllers: [AuthController],
    providers: [AuthService, EmployeesService, EmployeesRepository]
})
export class AuthModule {}
