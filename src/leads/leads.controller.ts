import type { Lead } from './leads.interface';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { CreateLeadDto, LeadResponseSwaggerDto } from './leads.dto';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';

@ApiTags('Leads')
@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener lista de leads' })
  @ApiOkResponse({
    description: 'Lista de leads obtenida correctamente',
    type: LeadResponseSwaggerDto,
    isArray: true,
  })
  getLeads(): Lead[] {
    return this.leadsService.getLeadsList();
  }

  @Post()
  @ApiOperation({ summary: 'Agregar un nuevo lead' })
  @ApiCreatedResponse({
    description: 'Lead creado correctamente',
    type: LeadResponseSwaggerDto,
  })
  @ApiBadRequestResponse({
    description: 'Email already exists',
    schema: {
      example: {
        message: 'Email already exists',
        error: 'Bad Request',
        statusCode: 400,
      },
    },
  })
  addLead(@Body() body: CreateLeadDto): Lead {
    return this.leadsService.addLead(body);
  }
}
