import { Body, Controller, Get, Post, Param, Patch, Delete } from "@nestjs/common";
import { EmployeesService } from "./employees.service";
import { Employee } from "./schemas/employee.schema";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Get(':personalId')
    async getEmployee(@Param('personalId') personalId: string): Promise<Employee> {
        return this.employeesService.getEmployeeByPersonalId(personalId);
    }

    @Get()
    async getEmployees(): Promise<Employee[]> {
        return this.employeesService.getEmployees();
    }

    @Post()
    async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
        return this.employeesService.createEmployee(createEmployeeDto.personalId, createEmployeeDto.hash);
    }

    @Patch(':personalId')
    async updateEmployee(@Param('personalId') personalId: string, @Body() updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
        return this.employeesService.updateEmployee(personalId, updateEmployeeDto);
    }

    @Delete()
    async deleteEmployees() {
        this.employeesService.deleteEmployees({});
    }
}
