import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Employee extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: [true, 'Duplicate email address entered.'] })
  email: string;

  @Prop()
  hash: string;

  @Prop({ unique: [true, 'Duplicate phone number entered.'] })
  phoneNumber: string;

  @Prop()
  address: string;

  @Prop()
  zipCode: number;

  @Prop()
  city: string;

  @Prop()
  dateOfBirth: string;

  @Prop()
  placeOfBirth: string;

  @Prop()
  gender: string;

  @Prop()
  maritalSatus: string;

  @Prop()
  nationality: string;

  @Prop()
  birthName: string;

  @Prop()
  socialNumber: string;

  @Prop()
  idNumber: string;

  @Prop()
  bankName: string;

  @Prop({ unique: [true, 'Duplicate IBAN entered.'] })
  iban: string;

  @Prop()
  bic: string;

  @Prop()
  cardHolder: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
