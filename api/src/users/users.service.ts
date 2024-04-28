import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt"
@Injectable()
export class UsersService {
  constructor(
    private readonly prisma:PrismaService
  ){}
  async create(dto: CreateUserDto) {
    const {password , ...rest} = dto //ES6 syntax destruction 
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password,salt)
    return await  this.prisma.user.create({
      data : {
        ...rest , 
        password:hashPassword
      }
    })
  }

 async findAll() {
    return await this.prisma.user.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
