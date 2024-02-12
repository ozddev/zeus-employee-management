import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from '../strategies/local.strategy';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { EmployeeProfile } from '@app/common/profile/employee.profile';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'EMPLOYEES_SERVICE', transport: Transport.TCP },
    ]),
    PassportModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
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
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, EmployeeProfile],
})
export class AuthModule {}
