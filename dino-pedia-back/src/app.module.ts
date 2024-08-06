import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DinosaurModule } from './dinosaur/dinosaur.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://josip:ovojepasswordkrejzi2004@cluster0.kuij2n1.mongodb.net/DinopediaDB?retryWrites=true&w=majority&appName=Cluster0"),
    DinosaurModule,
    UsersModule,
    AuthModule,],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
