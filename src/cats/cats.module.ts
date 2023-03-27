import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './cat.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CatsMongooseModule', schema: CatSchema },
    ]),
  ], //permite inyectar el modelo, lo vuelve inyectable a los módulos que estén dentro del array de forFeature
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
