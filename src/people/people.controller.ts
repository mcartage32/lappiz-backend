import type { Person } from './people.interface';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto, PersonResponseDto } from './people.dto';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';

@ApiTags('people')
@Controller()
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get('get-people')
  @ApiOperation({ summary: 'Obtener lista de personas' })
  @ApiOkResponse({
    description: 'Lista de personas obtenida correctamente',
    type: PersonResponseDto,
    isArray: true,
  })
  getPeople(): Person[] {
    return this.peopleService.getPeople();
  }

  @Post('add-person')
  @ApiOperation({ summary: 'Agregar una nueva persona' })
  @ApiCreatedResponse({
    description: 'Persona creada correctamente',
    type: PersonResponseDto,
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
  addPerson(@Body() body: CreatePersonDto): Person {
    return this.peopleService.addPerson(body);
  }
}
