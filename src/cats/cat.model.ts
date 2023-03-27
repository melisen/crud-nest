import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
});

/*
export class Cat{
    constructor(
        public name: string,
        public age: number,
        public breed: string,
        public id: string,        
    ) {}
}
*/
