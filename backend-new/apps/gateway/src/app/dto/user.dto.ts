import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { Role } from '../enums/role.enum';

export class User {
  @IsString()
  @IsNotEmpty()
  personalId: string;

  @IsString()
  @IsNotEmpty()
  hash: string;

  @IsOptional()
  roles: Role[];
}
