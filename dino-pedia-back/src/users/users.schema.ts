import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = Users & Document;

@Schema({ collection: 'users' })
export class Users {
    @Prop()
    username: string;

    @Prop()
    password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);