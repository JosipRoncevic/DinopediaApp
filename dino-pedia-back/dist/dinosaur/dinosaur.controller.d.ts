import { DinosaurService } from './dinosaur.service';
import { CreateDinosaurDto } from './create-dinosaur.dto';
import { UpdateDinosaurDto } from './update.dinosaur.dto';
export declare class DinosaurController {
    private readonly dinosaurService;
    constructor(dinosaurService: DinosaurService);
    addDinosaur(createDinosaurDto: CreateDinosaurDto): Promise<{
        id: string;
    }>;
    getAllDinosaurs(): Promise<import("./schema/dinosaurs.schema").Dinosaurs[]>;
    getDinosaur(dinoId: string): Promise<import("./schema/dinosaurs.schema").Dinosaurs>;
    updateDinosaur(dinoId: string, updateDinosaurDto: UpdateDinosaurDto): Promise<import("./schema/dinosaurs.schema").Dinosaurs>;
    removeDinosaur(dinoId: string): Promise<any>;
}
