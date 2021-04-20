import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodosDocument = Todos & Document;

@Schema()
export class Todos {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  state: string;
}

export const TodosSchema = SchemaFactory.createForClass(Todos);

