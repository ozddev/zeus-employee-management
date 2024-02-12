import { Role } from '@app/common/roles/role.enum';
import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsString } from 'class-validator';

export class ValidateUserDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  personalId: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  hash: string;

  @AutoMap()
  @IsNotEmpty()
  roles: Role[];
}
