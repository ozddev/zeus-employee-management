import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '@auth/enums/role.enum';

@Schema({
  timestamps: true,
})
export class Employee extends Document {
  @Prop({
    required: true,
  })
  personalId: string;

  @Prop({
    required: true,
  })
  hash: string;

  @Prop({
    required: false,
    default: null,
  })
  firstName: string;

  @Prop({
    required: false,
    default: null,
  })
  lastName: string;

  @Prop({
    required: false,
    default: null,
    unique: true,
  })
  email: string;

  @Prop({
    required: false,
    default: null,
    unique: true,
  })
  phoneNumber: string;

  @Prop({
    required: false,
    default: null,
  })
  address: string;

  @Prop({
    required: false,
    default: null,
  })
  zipCode: number;

  @Prop({
    required: false,
    default: null,
  })
  city: string;

  @Prop({
    required: false,
    default: null,
  })
  dateOfBirth: string;

  @Prop({
    required: false,
    default: null,
  })
  placeOfBirth: string;

  @Prop({
    required: false,
    default: null,
  })
  gender: string;

  @Prop({
    required: false,
    default: null,
  })
  maritalSatus: string;

  @Prop({
    required: false,
    default: null,
  })
  nationality: string;

  @Prop({
    required: false,
    default: null,
  })
  birthName: string;

  @Prop({
    required: false,
    default: null,
  })
  socialNumber: string;

  @Prop({
    required: false,
    default: null,
  })
  idNumber: string;

  @Prop({
    required: false,
    default: null,
  })
  bankName: string;

  @Prop({
    required: false,
    default: null,
    unique: true,
  })
  iban: string;

  @Prop({
    required: false,
    default: null,
  })
  bic: string;

  @Prop({
    required: false,
    default: null,
  })
  cardHolder: string;

  @Prop({
    required: false,
    default: null,
  })
  roles: Role[];
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
