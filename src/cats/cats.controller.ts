import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
//import { Render } from '@nestjs/common/decorators';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { Cat } from 'src/interfaces/cat/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(
    @Body('name') catName: string,
    @Body('age') catAge: number,
    @Body('breed') catBreed: string,
  ) {
    await this.catsService.insertNewCat(catName, catAge, catBreed);
  }

  @Get()
  async findAll() {
    const cats = await this.catsService.findAll();
    return cats as Cat[];
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.catsService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createCatDto: CreateCatDto) {
    await this.catsService.update(id, createCatDto);
    const modificado = await this.catsService.findById(id);
    return modificado;
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    this.catsService.deleteById(id);
  }
}
