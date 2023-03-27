import * as mongoose from 'mongoose';

export interface Cat extends mongoose.Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
  readonly _id: number;
}
// el updated product se va a basar en la interface de mongoose gracias al extends mongoose.Document