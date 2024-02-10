import { Role } from '@app/common';

export class PayloadDto {
  sub: string;

  roles: Role[];
}
