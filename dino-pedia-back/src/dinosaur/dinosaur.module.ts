import { Module } from '@nestjs/common';
import { DinosaurController } from './dinosaur.controller';
import { DinosaurService } from './dinosaur.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DinosaursSchema } from './schema/dinosaurs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Dinosaurs',
      schema: DinosaursSchema,
      collection: 'Dinosaurs'
    }])
  ],
  controllers: [DinosaurController],
  providers: [DinosaurService],
  exports: [DinosaurService],
})
export class DinosaurModule { }
