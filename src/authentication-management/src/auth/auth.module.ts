import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { EmployeesService } from 'src/employees/employees.service';
import { EmployeesModule } from 'src/employees/employees.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    EmployeesModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<string | number>('JWT_EXPIRES'),
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, EmployeesService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
