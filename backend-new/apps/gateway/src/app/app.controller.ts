import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Controller, Get, Inject, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('EMPLOYEES_SERVICE') private employeesClient: ClientProxy
  ) {}

  @Get('/api')
  helloworld() {
    return 'Hello World!'
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.appService.login(req.user);
  }

  @Get('api/hello')
  async hello(): Promise<any> {
    return this.appService.hello();
  }
}
