import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReclamationsService } from './reclamations.service';
import { CreateReclamationDto } from './dto/create-reclamation.dto';
import { UpdateReclamationDto } from './dto/update-reclamation.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("Reclamations")
@Controller('reclamations') //path
export class ReclamationsController {
  constructor(private readonly reclamationsService: ReclamationsService) {}

  @Post()
  create(@Body() createReclamationDto: CreateReclamationDto) {
    return this.reclamationsService.create(createReclamationDto);
  }

  @Get()
  findAll() {
    return this.reclamationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reclamationsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReclamationDto: UpdateReclamationDto) {
    return this.reclamationsService.update(id, updateReclamationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reclamationsService.remove(id);
  }
}
