import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Controller, Get, Inject, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';


@Controller('auth')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('EMPLOYEES_SERVICE') private employeesClient: ClientProxy
  ) {}

  @Get('/')
  hello() {
    return 'Hello World!'
  }

  @Get('/hello')
  helloworld() {
    const pattern = { cmd: 'helloworld' };
    const data = 'Alice';
    return this.employeesClient.send(pattern, data);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.appService.login(req.user);
  }
}
