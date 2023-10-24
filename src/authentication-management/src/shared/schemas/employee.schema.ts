import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
  firstName: string;

  @Prop({
    required: true,
  })
  lastName: string;

  @Prop({
    required: false,
    default: null,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  hash: string;

  @Prop({
    required: true,
    unique: true,
  })
  phoneNumber: string;

  @Prop({
    required: true,
  })
  address: string;

  @Prop({
    required: true,
  })
  zipCode: number;

  @Prop({
    required: true,
  })
  city: string;

  @Prop({
    required: true,
  })
  dateOfBirth: string;

  @Prop({
    required: true,
  })
  placeOfBirth: string;

  @Prop({
    required: true,
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
    required: true,
  })
  socialNumber: string;

  @Prop({
    required: true,
  })
  idNumber: string;

  @Prop({
    required: true,
  })
  bankName: string;

  @Prop({
    required: true,
    unique: true,
  })
  iban: string;

  @Prop({
    required: false,
    default: null,
  })
  bic: string;

  @Prop({
    required: true,
  })
  cardHolder: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
