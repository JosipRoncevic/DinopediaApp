import { Injectable, NotFoundException } from '@nestjs/common';
import { Dinosaur } from './dinosaur.model';
import { UpdateDinosaurDto } from './update.dinosaur.dto';


@Injectable()
export class DinosaurService {
    private idCounter = 1;
    private dinosaurs: Dinosaur[] = [];

    insertDinosaur(name: string, period: string, diet: string) {
        const dinoId = this.idCounter++;
        const newDino = new Dinosaur(dinoId, name, period, diet);
        this.dinosaurs.push(newDino);
        return dinoId;
    }

    getDinosaurs() {
        return [...this.dinosaurs];
    }

    getSingleDino(dinoId: number) {
        const dinosaur = this.findDino(dinoId)[0];
        return { ...dinosaur };
    }

    updateDinosaur(dinoId: number, updateDinosaurDto: UpdateDinosaurDto) {
        const [dinosaur, index] = this.findDino(dinoId);
        const updatedDinosaur = { ...dinosaur, ...updateDinosaurDto };
        this.dinosaurs[index] = updatedDinosaur;
        return { updated: true, dinosaur: updatedDinosaur };
    }

    deleteDinosaur(dinoId: number) {
        const index = this.findDino(dinoId)[1];
        this.dinosaurs.splice(index, 1);
    }

    private findDino(id: number): [Dinosaur, number] {
        const dinoIndex = this.dinosaurs.findIndex(dino => dino.id === id);
        const dinosaur = this.dinosaurs[dinoIndex];
        if (!dinosaur) {
            throw new NotFoundException('Could not find the dinosaur.');
        }
        return [dinosaur, dinoIndex];
    }
}
