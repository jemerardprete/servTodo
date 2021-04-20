import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://uqcifyvefwuevzapj25q:mCcTnmDuxcuclSTfCBlG@b2ijqhitc4c5kq0-mongodb.services.clever-cloud.com:27017/b2ijqhitc4c5kq0')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
