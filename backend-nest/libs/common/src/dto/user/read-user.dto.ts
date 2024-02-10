import { Role } from "@app/common";

export class ReadUserDto {
  personalId: string;

  roles: Role[];
}
