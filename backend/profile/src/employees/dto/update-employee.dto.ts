import { Employee } from '@employees/schemas/employee.schema';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateEmployeeDto extends PartialType(Employee) {}
