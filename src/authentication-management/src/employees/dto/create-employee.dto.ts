import { IsNotEmpty, IsString } from "class-validator";

export class CreateEmployeeDto {

    @IsNotEmpty()
    @IsString()
    personalId: string;

    @IsNotEmpty()
    @IsString()
    hash: string;
}
