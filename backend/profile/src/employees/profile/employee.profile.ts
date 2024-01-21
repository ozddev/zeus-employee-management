import { Mapper, createMap, forMember, mapFrom } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { CreateEmployeeDto } from '@employees/dto/create-employee.dto';
import { ReadEmployeeDto } from '@employees/dto/read-employee.dto';
import { UpdateEmployeeDto } from '@employees/dto/update-employee.dto';
import { ReadUserDto } from '@employees/dto/user/read-user.dto';
import { Employee } from '@employees/schemas/employee.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Employee, ReadEmployeeDto, forMember((dest) => dest.roles, mapFrom(source => source.roles)));
      createMap(mapper, CreateEmployeeDto, Employee);
      createMap(mapper, UpdateEmployeeDto, Employee);
      createMap(mapper, Employee, ReadUserDto, forMember((dest) => dest.roles, mapFrom(source => source.roles)));
    };
  }
}
