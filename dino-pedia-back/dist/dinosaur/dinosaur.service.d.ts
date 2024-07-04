import { Dinosaur } from './dinosaur.model';
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
    updateDinosaur(dinoId: number, name: string, period: string, diet: string): void;
    deleteDinosaur(dinoId: number): void;
    checkDinosaurExists(dinoId: number): void;
    private findDino;
}
