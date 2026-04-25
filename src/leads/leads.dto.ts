import { ApiProperty } from '@nestjs/swagger';

import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateLeadDto {
  @ApiProperty({ example: 'Marcelo' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[^<>]*$/, {
    message: 'El nombre no puede contener HTML',
  })
  name!: string;

  @ApiProperty({ example: 'marcelo@email.com' })
  @IsEmail()
  email!: string;
}

export class LeadResponseSwaggerDto {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'Marcelo' })
  name!: string;

  @ApiProperty({ example: 'marcelo@email.com' })
  email!: string;

  @ApiProperty({ example: '21/4/2026, 15:30:00' })
  createdAt!: string;
}
