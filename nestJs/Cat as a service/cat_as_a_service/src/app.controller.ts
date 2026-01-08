import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatSelector, CatProp, NewCatData } from './app.service';
import { get } from 'http';

@Controller()
export class CatController {
  constructor(private readonly catService: CatSelector) {}

  @Get()
  getAllCats(): CatProp[]
  {
    return this.catService.getAllCats();
  }

  @Get(':id')
  getCat(@Param('id') catId: string):  CatProp | string{
    return this.catService.getCat(catId);
  }

  @Post()
  createCat(@Body() newCatData: NewCatData): string
  {
    return this.catService.createNewCat(newCatData);
  }
}
