import { AutoMap } from '@automapper/classes';
import { Role } from '@employees/roles/role.enum';

export class ReadUserDto {
  @AutoMap()
  personalId: string;

  @AutoMap()
  hash: string;

  @AutoMap()
  roles: Role[];
}
