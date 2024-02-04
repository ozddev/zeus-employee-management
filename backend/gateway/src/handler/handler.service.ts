import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class HandlerService {
  private readonly EMPLOYEES_URL: string;

  constructor(private readonly httpService: HttpService) {
    this.EMPLOYEES_URL = process.env.EMPLOYEES_URL;
  }

  async getEmployees(): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get<any>(this.EMPLOYEES_URL + '/employees').pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened! ' + error;
        }),
      ),
    );
    return data;
  }

  async getEmployeeById(id: string): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<any>(this.EMPLOYEES_URL + '/employees/' + id)
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened! ' + error;
          }),
        ),
    );
    return data;
  }

  async getEmployeeByPersonalId(personalId: string): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<any>(this.EMPLOYEES_URL + '/employees/' + personalId)
        .pipe(
          catchError((error: AxiosError) => {
            throw 'An error happened! ' + error;
          }),
        ),
    );
    return data;
  }
}
