import { Document } from "mongoose";
export type DinosaurDocument = Dinosaurs & Document;
export declare class Dinosaurs {
    name: string;
    period: string;
    diet: string;
}
export declare const DinosaursSchema: import("mongoose").Schema<Dinosaurs, import("mongoose").Model<Dinosaurs, any, any, any, Document<unknown, any, Dinosaurs> & Dinosaurs & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Dinosaurs, Document<unknown, {}, import("mongoose").FlatRecord<Dinosaurs>> & import("mongoose").FlatRecord<Dinosaurs> & {
    _id: import("mongoose").Types.ObjectId;
}>;
