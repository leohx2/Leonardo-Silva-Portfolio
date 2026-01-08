import { Module } from '@nestjs/common';
import { CatController } from './app.controller';
import { CatSelector } from './app.service';

@Module({
  imports: [],
  controllers: [CatController],
  providers: [CatSelector],
})
export class AppModule {}
