import mongoose, { Document } from "mongoose";
export type DinosaurDocument = Dinosaurs & Document;
export declare class Dinosaurs {
    name: string;
    period: string;
    diet: string;
}
export declare const DinosaursSchema: mongoose.Schema<Dinosaurs, mongoose.Model<Dinosaurs, any, any, any, mongoose.Document<unknown, any, Dinosaurs> & Dinosaurs & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Dinosaurs, mongoose.Document<unknown, {}, mongoose.FlatRecord<Dinosaurs>> & mongoose.FlatRecord<Dinosaurs> & {
    _id: mongoose.Types.ObjectId;
}>;
