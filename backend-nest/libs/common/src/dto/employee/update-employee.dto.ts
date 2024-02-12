import { Role } from '@app/common';
import { AutoMap } from '@automapper/classes';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  personalId: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  hash: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  firstName: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  lastName: string;

  @AutoMap()
  @IsEmail()
  @IsOptional()
  email: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  phoneNumber: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  address: string;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  zipCode: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  city: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  dateOfBirth: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  placeOfBirth: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  gender: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  maritalStatus: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nationality: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  birthName: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  socialNumber: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  idNumber: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  bankName: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  iban: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  bic: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  cardHolder: string;

  @AutoMap()
  @IsOptional()
  roles: Role[];
}
