import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PeopleModule,
  ],
})
export class AppModule {}
