import { Employee } from "@employees/schemas/employee.schema";
import { PickType } from "@nestjs/mapped-types";

export class ReadUserDto extends PickType(Employee, ['personalId', 'hash', 'roles'] as const) {}
