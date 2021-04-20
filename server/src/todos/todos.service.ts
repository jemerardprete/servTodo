import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
  ) { }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async findAll(): Promise<any[]> {
    return this.todoModel.find().exec();
  }

  async deleteCompleted() {
    this.todoModel.deleteMany({ state: "DONE" }).exec();
  }

  async update(id) {
    const doc = await this.todoModel.findById(id);
    doc.state = doc.state == "DONE" ? "PENDING" : "DONE";
    return doc.save();
  }

  async deleteById(id) {
    await this.todoModel.deleteOne({ _id: id }).exec();
  }
}
