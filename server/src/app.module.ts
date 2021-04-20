import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://uqcifyvefwuevzapj25q:mCcTnmDuxcuclSTfCBlG@b2ijqhitc4c5kq0-mongodb.services.clever-cloud.com:27017/b2ijqhitc4c5kq0'), TodoModule]
})
export class AppModule { }
