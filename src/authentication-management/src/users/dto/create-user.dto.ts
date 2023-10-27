import { IsOptional, IsString } from 'class-validator';
import { Role } from 'src/auth/enums/role.enum';

export class CreateUserDto {
  @IsString()
  personalId: string;

  @IsString()
  hash: string;

  @IsString()
  @IsOptional()
  roles: Role[];
}
