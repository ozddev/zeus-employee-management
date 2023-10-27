import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.getUsers();
  }

  @Get(':personalId')
  findOne(@Param('personalId') personalId: string) {
    return this.usersService.getUserByPersonalId(personalId);
  }

  @Patch(':personalId')
  update(@Param('personalId') personalId: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(personalId, updateUserDto);
  }

  @Delete(':personalId')
  remove(@Param('personalId') personalId: string) {
    return this.usersService.deleteUser(personalId);
  }
}
