import { Module } from '@nestjs/common';
import { ReclamationsService } from './reclamations.service';
import { ReclamationsController } from './reclamations.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ReclamationsController],
  providers: [ReclamationsService, PrismaService],

})
export class ReclamationsModule {}
