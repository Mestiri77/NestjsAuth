import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}
  async login(dto: CreateAuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (user) {
      const { password, ...rest } = user;
      if (await bcrypt.compare(dto.password, password)) {
        const token = this.jwt.sign(rest);
        return token;
      } else {
        throw new HttpException(
          'your password is wrong',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    else {
      return "user not found"
    }
  }

async getMyInfo(token:string){
  const myInfo = await this.jwt.decode(token)
  return myInfo
}


  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
