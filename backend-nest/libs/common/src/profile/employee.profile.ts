import { Mapper, createMap, forMember, mapFrom } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Employee } from '../schemas/employee.schema';
import { CreateEmployeeDto, ReadEmployeeDto, ReadUserDto, UpdateEmployeeDto, ValidateUserDto } from '../dto';

@Injectable()
export class EmployeeProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Employee, ReadEmployeeDto, forMember((dest) => dest.roles, mapFrom(source => source.roles)));
      createMap(mapper, Employee, ValidateUserDto, forMember((dest) => dest.roles, mapFrom(source => source.roles)));
      createMap(mapper, ValidateUserDto, ReadUserDto, forMember((dest) => dest.roles, mapFrom(source => source.roles))); 
      createMap(mapper, CreateEmployeeDto, Employee, forMember((dest) => dest.roles, mapFrom(source => source.roles)));
      createMap(mapper, UpdateEmployeeDto, Employee, forMember((dest) => dest.roles, mapFrom(source => source.roles)));
    };
  }
}
