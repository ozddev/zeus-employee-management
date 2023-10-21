import { IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  hash: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  address: string;

  @IsNumber()
  zipCode: number;

  @IsString()
  city: string;

  @IsString()
  dateOfBirth: string;

  @IsString()
  placeOfBirth: string;

  @IsString()
  gender: string;

  @IsString()
  maritalSatus: string;

  @IsString()
  nationality: string;

  @IsString()
  birthName: string;

  @IsString()
  socialNumber: string;

  @IsString()
  idNumber: string;

  @IsString()
  bankName: string;

  @IsString()
  iban: string;

  @IsString()
  bic: string;

  @IsString()
  cardHolder: string;
}
