import { Module } from '@nestjs/common';
import { DinosaurController } from './dinosaur.controller';
import { DinosaurService } from './dinosaur.service';

@Module({
  controllers: [DinosaurController],
  providers: [DinosaurService],
  exports: [DinosaurService],
})
export class DinosaurModule { }
