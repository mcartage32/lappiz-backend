import * as fs from 'fs';
import * as path from 'path';
import type { Lead } from './leads.interface';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { CreateLeadDto } from './leads.dto';

@Injectable()
export class LeadsService {
  private filePath = path.join(process.cwd(), 'src/data/leads.json');

  private readFile(): Lead[] {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data || '[]') as Lead[];
    } catch (error) {
      console.error('Error reading file:', error);
      throw new InternalServerErrorException('Error reading data');
    }
  }

  private writeFile(data: Lead[]) {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error writing file:', error);
      throw new InternalServerErrorException('Error writing data');
    }
  }

  getLeadsList(page = 1, limit = 10) {
    const leads = this.readFile();

    const total = leads.length;
    const totalPages = Math.ceil(total / limit);

    // evitar páginas inválidas
    const safePage = Math.min(Math.max(page, 1), totalPages || 1);

    const startIndex = (safePage - 1) * limit;
    const endIndex = startIndex + limit;

    const data = leads.slice(startIndex, endIndex);

    return {
      data,
      total,
      page: safePage,
      limit,
      totalPages,
    };
  }

  addLead(Lead: CreateLeadDto): Lead {
    const leads = this.readFile();

    const exists = leads.some((p) => p.email === Lead.email);

    if (exists) {
      throw new BadRequestException('Email already exists');
    }

    const lastId = leads.length > 0 ? leads[leads.length - 1].id : 0;

    const newLead: Lead = {
      id: lastId + 1,
      name: Lead.name,
      email: Lead.email,
      createdAt: new Date().toLocaleString('es-CO', {
        timeZone: 'America/Bogota',
      }),
    };

    leads.push(newLead);

    this.writeFile(leads);

    return newLead;
  }
}
