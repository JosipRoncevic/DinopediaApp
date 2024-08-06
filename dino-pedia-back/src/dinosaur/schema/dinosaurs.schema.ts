import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type DinosaurDocument = Dinosaurs & Document;

@Schema({ collection: 'Dinosaurs' })
export class Dinosaurs {
    @Prop()
    name: string;

    @Prop()
    period: string;

    @Prop()
    diet: string;
}

export const DinosaursSchema = SchemaFactory.createForClass(Dinosaurs)
