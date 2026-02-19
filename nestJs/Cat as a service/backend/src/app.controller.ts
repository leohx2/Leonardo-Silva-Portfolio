import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatSelector, CatProp, NewCatData } from './app.service';

@Controller()
export class CatController {
  constructor(private readonly catService: CatSelector) {}

  @Get()
  getAllCats(): CatProp[]
  {
    return this.catService.getAllCats();
  }

  
  @Get('allIds')
  getLength(): string[] {
    return this.catService.getAllIds();
  }
  
  @Get('get/:id')
  getCat(@Param('id') catId: string):  CatProp[] | string{
    return this.catService.getCat(catId);
  }

  @Post('addCat')
  createCat(@Body() newCatData: NewCatData): string
  {
    return this.catService.createNewCat(newCatData);
  }
}
