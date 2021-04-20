import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://uobkn1crw8dhdbvfzn84:9GvUDfvD9SVfk1s9lVoX@bwqbpes3lmem68w-mongodb.services.clever-cloud.com:27017/bwqbpes3lmem68w'),
    TodosModule,
  ],
})
export class AppModule { }
