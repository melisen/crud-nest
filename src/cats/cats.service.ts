import { Injectable } from '@nestjs/common';
//import { CreateCatDto } from 'src/dto/create-cat.dto';
import { Cat } from 'src/interfaces/cat/cat.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];
  //con InjectModel le pasamos el nombre del modelo que queremos inyectar, definido en cat.model y cats.module
  //Cat es la interface
  constructor(
    @InjectModel('CatsMongooseModule') private readonly catModel: Model<Cat>,
  ) {}

  async insertNewCat(name: string, age: number, breed: string) {
    const newCat = new this.catModel({ name: name, age: age, breed: breed });
    const result = await newCat.save();
    console.log(result);
    return result;
  }

  async findAll() {
    const buscar = await this.catModel.find({});
    console.log(buscar);
    return buscar;
  }

  async findById(id: string): Promise<Cat> {
    const cat = await this.catModel.findById(id);
    if (!cat) {
      console.log('No se pudo encontrar');
    }
    return cat;
  }

  async deleteById(id) {
    await this.catModel.deleteOne({ _id: id });
    console.log('Eliminado');
  }

  async update(id: string, CatDto) {
    const modificar = await this.catModel.findOneAndUpdate(
      { _id: id },
      {
        name: CatDto.name,
        age: CatDto.age,
        breed: CatDto.breed,
      },
    );
    return modificar;
  }
}
