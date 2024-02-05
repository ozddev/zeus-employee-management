import { Employee } from '@employees/schemas/employee.schema';
import { OmitType } from '@nestjs/mapped-types';

export class CreateEmployeeDto extends OmitType(Employee, ['email'] as const) {}
