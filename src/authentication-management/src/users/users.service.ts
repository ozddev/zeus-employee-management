import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import { hashPassword } from 'src/shared/helper';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.hash = await hashPassword(createUserDto.hash);
    return this.usersRepository.create(createUserDto);
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async getUserById(id: string): Promise<User> {
    return this.usersRepository.findOne({ _id: id });
  }

  async getUserByPersonalId(personalId: string): Promise<User> {
    return this.usersRepository.findOne({ personalId: personalId });
  }

  async updateUser(
    personalId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    if (updateUserDto.hash) {
      updateUserDto.hash = await hashPassword(updateUserDto.hash);
    }
    return this.usersRepository.findOneAndUpdate(
      { personalId: personalId },
      updateUserDto,
    );
  }

  async deleteUser(personalId: string): Promise<boolean> {
    return this.usersRepository.deleteMany({ personalId: personalId });
  }
}
