import { Injectable } from "@nestjs/common";
import { EmployeesRepository } from "./employees.repository";
import { Employee } from "./schemas/employee.schema";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { FilterQuery } from "mongoose";
import * as bcrypt from 'bcrypt';

@Injectable({})
export class EmployeesService {
    constructor(private readonly employeesRepository: EmployeesRepository) {}

    async getEmployeeById(id: string): Promise<Employee> {
        return this.employeesRepository.findOne({ id });
    }

    async getEmployeeByPersonalId(personalId: string): Promise<Employee> {
        return this.employeesRepository.findOne({ personalId });
    }

    async getEmployees(): Promise<Employee[]> {
        return this.employeesRepository.find({});
    }

    async createEmployee(personalId: string, password: string): Promise<Employee> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);

        return this.employeesRepository.create({
            personalId: personalId,
            hash: hash
        });
    }

    async updateEmployee(personalId: string, employeeUpdates: UpdateEmployeeDto): Promise<Employee> {
        return this.employeesRepository.findOneAndUpdate({ personalId }, employeeUpdates);
    }

    async deleteEmployees(entityFilterQuery: FilterQuery<Employee>): Promise<boolean> {
        return this.employeesRepository.deleteMany(entityFilterQuery);
    }
}
