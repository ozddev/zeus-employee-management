import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({
  timestamps: true,
})
export class Employee {
  @Prop({ unique: [true, 'Duplicate Personal ID entered.'] })
  personalId: string;

  @Prop()
  hash: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
