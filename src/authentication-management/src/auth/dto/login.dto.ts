import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  readonly personalId: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}
