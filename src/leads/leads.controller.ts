import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiQuery,
} from '@nestjs/swagger';
import type { Lead } from './leads.interface';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { CreateLeadDto, LeadResponseSwaggerDto } from './leads.dto';
import { Query } from '@nestjs/common';

@ApiTags('Leads')
@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener lista de leads' })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 10,
  })
  @ApiOkResponse({
    description: 'Lista de leads obtenida correctamente',
    type: LeadResponseSwaggerDto,
    isArray: true,
  })
  getLeads(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ): { data: Lead[]; total: number; page: number; limit: number } | Lead[] {
    return this.leadsService.getLeadsList(
      page ? Number(page) : undefined,
      limit ? Number(limit) : undefined,
    );
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
