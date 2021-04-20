import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Logger } from '@nestjs/common';
import { TodoService } from './todo/todo.service';

export type Id = string;
export interface Todo {
  name: string;
  completed: boolean;
  id: Id;
}

export interface TodoDTO {
  _id: Id;
  name: string;
  state: "DONE" | "PENDING";
}

// var todos: TodoDTO[] = [
//   {
//     _id: '1',
//     name: 'apprendre la salsa',
//     state: 'DONE',
//   },
//   {
//     _id: '2',
//     name: 'ne pas casser le travail avec un foreach',
//     state: 'DONE',
//   },
//   {
//     _id: '3',
//     name: 'Pending',
//     state: 'PENDING',
//   }
// ];



@Controller()
export class AppController {
  constructor(private appService: AppService, private readonly catsService: TodoService) { }

  @Get("todos")
  async getAll(): Promise<any> {
    return this.catsService.findAll();
  }

  @Post("todos")
  async postTodos(@Body() data: TodoDTO): Promise<any> {
    await this.catsService.create(data);
  }
}
