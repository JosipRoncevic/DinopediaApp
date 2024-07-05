import { Dinosaur } from './dinosaur.model';
import { UpdateDinosaurDto } from './update.dinosaur.dto';
export declare class DinosaurService {
    private idCounter;
    private dinosaurs;
    insertDinosaur(name: string, period: string, diet: string): number;
    getDinosaurs(): Dinosaur[];
    getSingleDino(dinoId: number): {
        id: number;
        name: string;
        period: string;
        diet: string;
    };
    updateDinosaur(dinoId: number, updateDinosaurDto: UpdateDinosaurDto): {
        updated: boolean;
        dinosaur: {
            name: string;
            period: string;
            diet: string;
            id: number;
        };
    };
    deleteDinosaur(dinoId: number): void;
    private findDino;
}
