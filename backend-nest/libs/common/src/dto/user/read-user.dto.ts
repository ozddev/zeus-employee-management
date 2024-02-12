import { Role } from '@app/common/roles/role.enum';
import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsString } from 'class-validator';

export class ReadUserDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  personalId: string;

  @AutoMap()
  @IsNotEmpty()
  roles: Role[];
}
