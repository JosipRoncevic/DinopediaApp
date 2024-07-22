import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DinosaurModule } from './dinosaur/dinosaur.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://josip:ovojepasswordkrejzi2004@cluster0.kuij2n1.mongodb.net/DinopediaDB?retryWrites=true&w=majority&appName=Cluster0"), DinosaurModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
