import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Role } from '@auth/enums/role.enum';

export class UpdateEmployeeDto {
  @IsString()
  personalId: string;

  @IsString()
  hash: string;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsNumber()
  @IsOptional()
  zipCode: number;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  dateOfBirth: string;

  @IsString()
  @IsOptional()
  placeOfBirth: string;

  @IsString()
  @IsOptional()
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
  @IsOptional()
  socialNumber: string;

  @IsString()
  @IsOptional()
  idNumber: string;

  @IsString()
  @IsOptional()
  bankName: string;

  @IsString()
  @IsOptional()
  iban: string;

  @IsString()
  @IsOptional()
  bic: string;

  @IsString()
  @IsOptional()
  cardHolder: string;

  @IsOptional()
  roles: Role[];
}
