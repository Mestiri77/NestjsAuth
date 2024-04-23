import { Injectable } from '@nestjs/common';
import { CreateReclamationDto } from './dto/create-reclamation.dto';
import { UpdateReclamationDto } from './dto/update-reclamation.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ReclamationsService {
  constructor(private prisma: PrismaService) {}

  async create(createReclamationDto: CreateReclamationDto) {
    return await this.prisma.reclamations.create({ data: createReclamationDto });

  }

  async findAll() {
    return await this.prisma.reclamations.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.reclamations.findUnique({ where: { id } });
  }

  async update(id: number, updateReclamationDto: UpdateReclamationDto) {
    return await this.prisma.reclamations.update({
      where: { id },
      data: updateReclamationDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.reclamations.delete({ where: { id } });
  }
}
