import { Controller, Get, Post, Res, HttpStatus, Body, Response, Delete, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Connection } from 'mongoose';
import { Logger } from '@nestjs/common';

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

var todos: TodoDTO[] = [
  {
    _id: '1',
    name: 'apprendre la salsa',
    state: 'DONE',
  },
  {
    _id: '2',
    name: 'ne pas casser le travail avec un foreach',
    state: 'DONE',
  },
  {
    _id: '3',
    name: 'Pending',
    state: 'PENDING',
  }
];



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("todos")
  getAll(): any {
    return todos;
  }

  @Post("todos")
  postTodos(@Body() data: TodoDTO): any {
    var string = String(Math.floor(Math.random() * 100000000) + 1);
    data._id = string;
    todos.push(data);
    todos.forEach(todo => {
      Logger.log(todo);
    })
    return todos;
  }

  @Delete("todos/completed")
  deleteTodos(): any {
    todos = todos.filter((todo) => {
      return todo.state === 'PENDING';
    });
    return todos;
  }

  @Delete("delete")
  deleteAll(): any {

  }

  @Delete("todos/:id")
  delete(@Param('id') id): any {
    var index = todos.map(x => {
      return x._id;
    }).indexOf(id);

    todos.splice(index, 1);
    return todos;
  }

  @Put("todos/:id")
  toggleTodo(@Param('id') id): any {
    var index = todos.map(x => {
      return x._id;
    }).indexOf(id);
    todos[index].state = todos[index].state == 'PENDING' ? 'DONE' : 'PENDING';
    return todos;
  }
}
