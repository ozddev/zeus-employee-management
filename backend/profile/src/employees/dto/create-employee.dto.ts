import { Role } from '@employees/roles/role.enum';
import { AutoMap } from '@automapper/classes';

export class CreateEmployeeDto {
  @AutoMap()
  personalId: string;

  @AutoMap()
  hash: string;

  @AutoMap()
  firstName: string;

  @AutoMap()
  lastName: string;

  @AutoMap()
  email: string;

  @AutoMap()
  phoneNumber: string;

  @AutoMap()
  address: string;

  @AutoMap()
  zipCode: number;

  @AutoMap()
  city: string;

  @AutoMap()
  dateOfBirth: string;

  @AutoMap()
  placeOfBirth: string;

  @AutoMap()
  gender: string;

  @AutoMap()
  maritalStatus: string;

  @AutoMap()
  nationality: string;

  @AutoMap()
  birthName: string;

  @AutoMap()
  socialNumber: string;

  @AutoMap()
  idNumber: string;

  @AutoMap()
  bankName: string;

  @AutoMap()
  iban: string;

  @AutoMap()
  bic: string;

  @AutoMap()
  cardHolder: string;

  @AutoMap()
  roles: Role[];
}
