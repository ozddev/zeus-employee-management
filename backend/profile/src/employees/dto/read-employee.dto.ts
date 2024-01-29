import { Employee } from "@employees/schemas/employee.schema";
import { OmitType } from "@nestjs/mapped-types";

export class ReadEmployeeDto extends OmitType(Employee, ['hash'] as const) {}
