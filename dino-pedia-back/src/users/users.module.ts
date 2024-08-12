import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { UsersController } from "./users.controller"
import { UsersService } from "./users.service"
import { UsersSchema } from "./users.schema"
@Module({
  imports: [MongooseModule.forFeature([{ name: "user", schema: UsersSchema }]),],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
