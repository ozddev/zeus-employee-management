import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsOptional()
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
  @IsOptional()
  maritalSatus: string;

  @IsString()
  @IsOptional()
  nationality: string;

  @IsString()
  @IsOptional()
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
  @IsOptional()
  bic: string;

  @IsString()
  cardHolder: string;
}
