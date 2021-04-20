import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
	constructor(private readonly catsService: TodoService) { }

	@Post()
	async create(@Body() createCatDto: any) {
		await this.catsService.create(createCatDto);
	}

	@Get()
	async findAll(): Promise<any[]> {
		return this.catsService.findAll();
	}
}
