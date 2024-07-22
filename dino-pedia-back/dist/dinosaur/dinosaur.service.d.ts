import { Model } from 'mongoose';
import { CreateDinosaurDto } from './create-dinosaur.dto';
import { UpdateDinosaurDto } from './update.dinosaur.dto';
import { DinosaurDocument, Dinosaurs } from './schema/dinosaurs.schema';
export declare class DinosaurService {
    private readonly dinosaurModel;
    constructor(dinosaurModel: Model<DinosaurDocument>);
    insertDinosaur(createDinosaurDto: CreateDinosaurDto): Promise<string>;
    getDinosaurs(): Promise<Dinosaurs[]>;
    getSingleDino(dinoId: string): Promise<Dinosaurs>;
    updateDinosaur(dinoId: string, updateDinosaurDto: UpdateDinosaurDto): Promise<Dinosaurs>;
    deleteDinosaur(dinoId: string): Promise<void>;
    private findDino;
}
