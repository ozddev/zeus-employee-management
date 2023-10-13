import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Employee, EmployeeDocument } from "./schemas/employee.schema";
import { Model } from "mongoose";
import { EntityRepository } from "src/database/entity.repository";

@Injectable()
export class EmployeesRepository extends EntityRepository<EmployeeDocument> {
    constructor(@InjectModel(Employee.name) employeeModel: Model<EmployeeDocument>) {
        super(employeeModel);
    }
}