import { Role } from "@app/common";

export class ValidateUserDto {
  personalId: string;

  hash: string;

  roles: Role[];
}
