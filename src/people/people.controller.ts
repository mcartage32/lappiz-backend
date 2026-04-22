import { Controller, Get, Post, Body } from '@nestjs/common';
import { PeopleService } from './people.service';
import type { Person } from './people.interface';
import { CreatePersonDto } from './people.dto';

@Controller()
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get('get-people')
  getPeople(): Person[] {
    return this.peopleService.getPeople();
  }

  @Post('add-person')
  addPerson(@Body() body: CreatePersonDto): Person {
    return this.peopleService.addPerson(body);
  }
}
