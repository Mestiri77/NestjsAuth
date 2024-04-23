import { PartialType } from '@nestjs/swagger';
import { CreateReclamationDto } from './create-reclamation.dto';

export class UpdateReclamationDto extends PartialType(CreateReclamationDto) {}
