import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot(
      'mongodb+srv://melisen:password-desafio@cluster-desafio-inicio.4b6gwyo.mongodb.net/?retryWrites=true&w=majority',
    ),
  ], //importarlo en app.module permite conexión a mongoose al empezar la aplicación
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
