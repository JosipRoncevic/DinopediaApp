import { Injectable, NotFoundException } from '@nestjs/common';
import { Dinosaur } from './dinosaur.model';

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
        console.log('Idem na findDino')
        console.log('Ovo je dinoId: ' + dinoId);
        const dinosaur = this.findDino(dinoId)[0];
        return { ...dinosaur };
    }

    updateDinosaur(dinoId: number, name: string, period: string, diet: string) {
        const [dinosaur, index] = this.findDino(dinoId);
        const updatedDinosaur = { ...dinosaur };
        if (name) {
            updatedDinosaur.name = name;
        }
        if (period) {
            updatedDinosaur.period = period;
        }
        if (diet) {
            updatedDinosaur.diet = diet;
        }
        this.dinosaurs[index] = updatedDinosaur;
    }

    deleteDinosaur(dinoId: number) {
        const index = this.findDino(dinoId)[1];
        this.dinosaurs.splice(index, 1);
    }

    checkDinosaurExists(dinoId: number): void {
        console.log('Checking dinosaur with ID:', dinoId);

        // Log the current dinosaurs array
        console.log('Current dinosaurs:', this.dinosaurs);

        // Ensure IDs are treated as numbers
        const dinoExists = this.dinosaurs.some(dino => dino.id === Number(dinoId));

        // Log the result of the check
        console.log('Dinosaur exists:', dinoExists);

        if (!dinoExists) {
            throw new NotFoundException(`Dinosaur with ID ${dinoId} does not exist.`);
        }
    }


    private findDino(id: number): [Dinosaur, number] {
        console.log(id);
        const dinoIndex = this.dinosaurs.findIndex(dino => dino.id === id);
        const dinosaur = this.dinosaurs[dinoIndex];
        console.log(dinoIndex);
        console.log(dinosaur);
        if (!dinosaur) {
            throw new NotFoundException('Could not find the dinosaur.');
        }
        return [dinosaur, dinoIndex];
    }
}
