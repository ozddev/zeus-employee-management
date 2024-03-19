import { Role } from 'common/src/lib/roles/role.enum';

export class CreateEmployeeDto {
  personalId: string;

  hash: string;

  firstName: string;

  lastName: string;

  email: string;

  phoneNumber: string;

  address: string;

  zipCode: number;

  city: string;

  dateOfBirth: string;

  placeOfBirth: string;

  gender: string;

  maritalStatus: string;

  nationality: string;

  birthName: string;

  socialNumber: string;

  idNumber: string;

  bankName: string;

  iban: string;

  bic: string;

  cardHolder: string;

  roles: Role[];
}
