import { Role } from "common/src/lib/roles/role.enum";

export class ReadUserDto {
  personalId: string;

  hash: string;

  roles: Role[];
}
