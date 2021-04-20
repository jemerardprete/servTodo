import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from 'schema/todo.schema';
import { TodoDTO } from './../../../client/src/todo.service';

@Injectable()
export class TodoService {
	constructor(
		@InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>,
	) { }

	async create(todoDTO: TodoDTO): Promise<Todo> {
		const createdCat = new this.todoModel(todoDTO);
		return createdCat.save();
	}

	async findAll(): Promise<Todo[]> {
		return this.todoModel.find().exec();
	}
}
