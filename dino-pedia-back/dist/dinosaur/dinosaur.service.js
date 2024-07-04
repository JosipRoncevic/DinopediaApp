"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinosaurService = void 0;
const common_1 = require("@nestjs/common");
const dinosaur_model_1 = require("./dinosaur.model");
let DinosaurService = class DinosaurService {
    constructor() {
        this.idCounter = 1;
        this.dinosaurs = [];
    }
    insertDinosaur(name, period, diet) {
        const dinoId = this.idCounter++;
        const newDino = new dinosaur_model_1.Dinosaur(dinoId, name, period, diet);
        this.dinosaurs.push(newDino);
        return dinoId;
    }
    getDinosaurs() {
        return [...this.dinosaurs];
    }
    getSingleDino(dinoId) {
        console.log('Idem na findDino');
        console.log('Ovo je dinoId: ' + dinoId);
        const dinosaur = this.findDino(dinoId)[0];
        return { ...dinosaur };
    }
    updateDinosaur(dinoId, name, period, diet) {
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
    deleteDinosaur(dinoId) {
        const index = this.findDino(dinoId)[1];
        this.dinosaurs.splice(index, 1);
    }
    checkDinosaurExists(dinoId) {
        console.log('Checking dinosaur with ID:', dinoId);
        console.log('Current dinosaurs:', this.dinosaurs);
        const dinoExists = this.dinosaurs.some(dino => dino.id === Number(dinoId));
        console.log('Dinosaur exists:', dinoExists);
        if (!dinoExists) {
            throw new common_1.NotFoundException(`Dinosaur with ID ${dinoId} does not exist.`);
        }
    }
    findDino(id) {
        console.log(id);
        const dinoIndex = this.dinosaurs.findIndex(dino => dino.id === id);
        const dinosaur = this.dinosaurs[dinoIndex];
        console.log(dinoIndex);
        console.log(dinosaur);
        if (!dinosaur) {
            throw new common_1.NotFoundException('Could not find the dinosaur.');
        }
        return [dinosaur, dinoIndex];
    }
};
exports.DinosaurService = DinosaurService;
exports.DinosaurService = DinosaurService = __decorate([
    (0, common_1.Injectable)()
], DinosaurService);
//# sourceMappingURL=dinosaur.service.js.map