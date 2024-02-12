import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../roles/role.enum';
import { AutoMap } from '@automapper/classes';

@Schema({
  timestamps: true,
})
export class Employee extends Document {
  @AutoMap()
  @Prop({
    required: true,
  })
  personalId: string;

  @AutoMap()
  @Prop({
    required: true,
  })
  hash: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  firstName: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  lastName: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
    unique: true,
  })
  email: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
    unique: true,
  })
  phoneNumber: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  address: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  zipCode: number;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  city: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  dateOfBirth: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  placeOfBirth: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  gender: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  maritalStatus: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  nationality: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  birthName: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  socialNumber: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  idNumber: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  bankName: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
    unique: true,
  })
  iban: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  bic: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  cardHolder: string;

  @AutoMap()
  @Prop({
    required: false,
    default: null,
  })
  roles: Role[];
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
