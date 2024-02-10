import { Role } from "@app/common";

export class ReadEmployeeDto {
  personalId: string;

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
