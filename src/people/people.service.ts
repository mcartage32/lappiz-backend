import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import type { Person } from './people.interface';
import * as fs from 'fs';
import * as path from 'path';
import { CreatePersonDto } from './people.dto';

@Injectable()
export class PeopleService {
  private filePath = path.join(process.cwd(), 'src/data/people.json');

  private readFile(): Person[] {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data || '[]') as Person[];
    } catch (error) {
      console.error('Error reading file:', error);
      throw new InternalServerErrorException('Error reading data');
    }
  }

  private writeFile(data: Person[]) {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error writing file:', error);
      throw new InternalServerErrorException('Error writing data');
    }
  }

  getPeople(): Person[] {
    return this.readFile();
  }

  addPerson(person: CreatePersonDto): Person {
    const people = this.readFile();

    const exists = people.some((p) => p.email === person.email);

    if (exists) {
      throw new BadRequestException('Email already exists');
    }

    const lastId = people.length > 0 ? people[people.length - 1].id : 0;

    const newPerson: Person = {
      id: lastId + 1,
      name: person.name,
      email: person.email,
      createdAt: new Date().toLocaleString('es-CO', {
        timeZone: 'America/Bogota',
      }),
    };

    people.push(newPerson);

    this.writeFile(people);

    return newPerson;
  }
}
