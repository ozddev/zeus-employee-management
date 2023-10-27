import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsString } from 'class-validator';
import { Role } from 'src/auth/enums/role.enum';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  personalId: string;

  @IsString()
  @IsOptional()
  hash: string;

  @IsString()
  @IsOptional()
  roles: Role[];
}
