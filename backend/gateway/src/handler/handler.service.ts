import { User } from '@auth/dto/incoming/user.dto';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Employee } from './schemas/employee.schema';

@Injectable()
export class HandlerService {
  private readonly EMPLOYEES_URL: string;

  constructor(
    private readonly httpService: HttpService
  ) {
    this.EMPLOYEES_URL = process.env.EMPLOYEES_URL;
  }

  async getEmployees(): Promise<Employee[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Employee[]>(this.EMPLOYEES_URL + '/employees')
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened! ' + error;
          }),
        ),
    );
    return data;
  }

  async getEmployeeById(id: string): Promise<Employee> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Employee>(this.EMPLOYEES_URL + '/employees/' + id)
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened! ' + error;
          }),
        ),
    );
    return data;
  }

  async getEmployeeByPersonalId(personalId: string): Promise<Employee> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Employee>(this.EMPLOYEES_URL + '/employees/' + personalId)
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened! ' + error;
          }),
        ),
    );
    return data;
  }

}
