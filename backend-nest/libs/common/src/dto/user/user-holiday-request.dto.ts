import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserHolidayRequestDto {
  // @AutoMap()
  @IsString()
  @IsNotEmpty()
  personalId: string;

  // @AutoMap()
  @IsString()
  @IsNotEmpty()
  from: string;

  // @AutoMap()
  @IsString()
  @IsNotEmpty()
  until: string;
}
