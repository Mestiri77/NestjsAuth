import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    return await this.prisma.client.create({ data: createClientDto });
  }

  async findAll() {
    return await this.prisma.client.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.client.findUnique({ where: { id } });
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    return await this.prisma.reclamation.update({
      where: { id },
      data: updateClientDto,
    });  }

  async remove(id: string) {
    return await this.prisma.reclamation.delete({ where: { id } });
  }
}
