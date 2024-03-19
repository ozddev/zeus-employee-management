import { Role } from '@app/common';
import { AutoMap } from '@automapper/classes';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  personalId: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  hash: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @AutoMap()
  @IsEmail()
  email: string;

  @AutoMap()
  @IsString()
  phoneNumber: string;

  @AutoMap()
  @IsString()
  address: string;

  @AutoMap()
  @IsNumber()
  zipCode: number;

  @AutoMap()
  @IsString()
  city: string;

  @AutoMap()
  @IsString()
  dateOfBirth: string;

  @AutoMap()
  @IsString()
  placeOfBirth: string;

  @AutoMap()
  @IsString()
  gender: string;

  @AutoMap()
  @IsString()
  maritalStatus: string;

  @AutoMap()
  @IsString()
  nationality: string;

  @AutoMap()
  @IsString()
  birthName: string;

  @AutoMap()
  @IsString()
  socialNumber: string;

  @AutoMap()
  @IsString()
  idNumber: string;

  @AutoMap()
  @IsString()
  bankName: string;

  @AutoMap()
  @IsString()
  iban: string;

  @AutoMap()
  @IsString()
  bic: string;

  @AutoMap()
  @IsString()
  cardHolder: string;

  @AutoMap()
  @IsNotEmpty()
  roles: Role[];
}
