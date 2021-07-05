import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../models/user.model';

@Controller('livros') //Decorator recebe como parametro qual e a url
export class UsersController {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  @Get() //Decorator para dizer que este metodo vai ser um GET
  async obterTodos(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
