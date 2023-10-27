import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/auth/enums/role.enum';

@Schema({
  timestamps: true,
})
export class User extends Document {
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
  roles: Role[];
}
