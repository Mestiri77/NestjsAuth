import { Injectable } from '@nestjs/common';
import { CreateReclamationDto } from './dto/create-reclamation.dto';
import { UpdateReclamationDto } from './dto/update-reclamation.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ReclamationsService {
  constructor(private prisma: PrismaService) {}

  async create(createReclamationDto: CreateReclamationDto) {
    return await this.prisma.reclamation.create({ data: createReclamationDto });

  }

  async findAll() {
    return await this.prisma.reclamation.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.reclamation.findUnique({ where: { id } });
  }

  async update(id: string, updateReclamationDto: UpdateReclamationDto) {
    return await this.prisma.reclamation.update({
      where: { id },
      data: updateReclamationDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.reclamation.delete({ where: { id } });
  }
}
