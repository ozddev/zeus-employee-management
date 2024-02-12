import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class GatewayService {
  constructor(
    @Inject('EMPLOYEES_SERVICE') private employeesClient: ClientProxy,
  ) {}

  async getEmployeeByPersonalId(personalId: string): Promise<any> {
    const pattern = { cmd: 'get_employee' };
    return this.employeesClient.send(pattern, personalId);
  }

  async getEmployees(): Promise<any> {
    const pattern = { cmd: 'get_employees' };
    return this.employeesClient.send(pattern, {});
  }
}
