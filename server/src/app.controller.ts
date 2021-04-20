import { Controller, Get, Post, Res, HttpStatus, Body , Response, Delete, Param, Put } from '@nestjs/common';
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

 const todos : TodoDTO[] =  [
  {
    _id: '1',
    name: 'apprendre la salsa',
    state: 'DONE',
  },
  {
    _id: '2',
    name: 'ne pas casser le travail avec un foreach',
    state: 'DONE',
  }
];



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get("todos")
  getAll(): any {
    return todos;
  }

  @Post("todos")
  postTodos(@Body() data: TodoDTO): any {

    todos.push(data);
    todos.forEach(todo=>{
      Logger.log(todo);
    })
  }

  @Delete("delete/completed")
  deleteTodos(): any {
    return todos;
  }

  @Delete("delete")
  deleteAll(): any {
    return null;
  }

  @Delete("delete/:id")
  delete(@Param('id') id): any {
    var index = todos.map(x => {
      return x._id;
    }).indexOf(id);
    
    todos.splice(index, 1);
    return null;
  }

  @Put("todos/:id")
  toggleTodo(@Param('id') id): any {
    // var index = todos.map(x => {
    //   return x._id;
    // }).indexOf(id);
    Logger.log(id);
    //todos[index].state == 'DONE' ? 'COMPLETED' : 'DONE';
    return todos;
  }
}
