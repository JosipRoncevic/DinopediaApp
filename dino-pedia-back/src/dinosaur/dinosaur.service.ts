import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDinosaurDto } from './create-dinosaur.dto';
import { UpdateDinosaurDto } from './update.dinosaur.dto';
import { DinosaurDocument, Dinosaurs } from './schema/dinosaurs.schema';

@Injectable()
export class DinosaurService {
    constructor(
        @InjectModel(Dinosaurs.name) private readonly dinosaurModel: Model<DinosaurDocument>
    ) { }

    async insertDinosaur(createDinosaurDto: CreateDinosaurDto): Promise<string> {
        const newDino = new this.dinosaurModel(createDinosaurDto);
        const result = await newDino.save();
        return result.id;
    }

    async getDinosaurs(): Promise<Dinosaurs[]> {
        const dinosaurs = await this.dinosaurModel.find().exec();
        return dinosaurs;
    }

    async getSingleDino(dinoId: string): Promise<Dinosaurs> {
        const dinosaur = await this.findDino(dinoId);
        return dinosaur;
    }

    async updateDinosaur(dinoId: string, updateDinosaurDto: UpdateDinosaurDto): Promise<Dinosaurs> {
        const updatedDinosaur = await this.dinosaurModel.findByIdAndUpdate(dinoId, updateDinosaurDto, { new: true }).exec();
        if (!updatedDinosaur) {
            throw new NotFoundException('Could not find the dinosaur.');
        }
        return updatedDinosaur;
    }

    async deleteDinosaur(dinoId: string): Promise<void> {
        const result = await this.dinosaurModel.deleteOne({ _id: dinoId }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('Could not find the dinosaur.');
        }
    }

    private async findDino(id: string): Promise<Dinosaurs> {
        let dinosaur;
        try {
            dinosaur = await this.dinosaurModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find the dinosaur.');
        }
        if (!dinosaur) {
            throw new NotFoundException('Could not find the dinosaur.');
        }
        return dinosaur;
    }
}
