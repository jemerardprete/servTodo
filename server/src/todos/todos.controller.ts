import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './schemas/todo.schema';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) { }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return await this.todosService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Delete('/completed')
  async deleteCompleted() {
    this.todosService.deleteCompleted();
  }

  @Delete('/:id')
  async deleteById(@Param('id') id) {
    return this.todosService.deleteById(id);
  }

  @Put('/:id')
  async update(@Param('id') id) {
    return this.todosService.update(id);
  }
}
