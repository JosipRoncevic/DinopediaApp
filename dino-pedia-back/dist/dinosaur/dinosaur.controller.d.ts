import { DinosaurService } from './dinosaur.service';
import { CreateDinosaurDto } from './create-dinosaur.dto';
import { UpdateDinosaurDto } from './update.dinosaur.dto';
export declare class DinosaurController {
    private readonly dinosaurService;
    constructor(dinosaurService: DinosaurService);
    addDinosaur(createDinosaurDto: CreateDinosaurDto): {
        id: number;
    };
    getAllDinosaurs(): import("./dinosaur.model").Dinosaur[];
    getDinosaur(dinoId: string): {
        id: number;
        name: string;
        period: string;
        diet: string;
    };
    updateDinosaur(dinoId: string, updateDinosaurDto: UpdateDinosaurDto): {
        updated: boolean;
        dinosaur: {
            name: string;
            period: string;
            diet: string;
            id: number;
        };
    };
    removeDinosaur(dinoId: string): any;
}
