import { IsNotEmpty, IsString } from 'class-validator';

export class HolidayRequestDto {
  // @AutoMap()
  @IsString()
  @IsNotEmpty()
  from: string;

  // @AutoMap()
  @IsString()
  @IsNotEmpty()
  until: string;
}
