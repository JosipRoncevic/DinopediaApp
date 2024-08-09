import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { DinosaurService } from './dinosaur.service';
import { CreateDinosaurDto } from './create-dinosaur.dto';
import { UpdateDinosaurDto } from './update.dinosaur.dto';

@Controller('dinosaurs')
export class DinosaurController {
    constructor(private readonly dinosaurService: DinosaurService) { }

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async addDinosaur(
        @Body() createDinosaurDto: CreateDinosaurDto,
    ) {
        const generatedId = await this.dinosaurService.insertDinosaur(createDinosaurDto);
        return { id: generatedId };
    }

    @Get()
    async getAllDinosaurs() {
        const dinosaurs = await this.dinosaurService.getDinosaurs();
        return dinosaurs;
    }

    @Get(':id')
    async getDinosaur(@Param('id') dinoId: string) {
        const dinosaur = await this.dinosaurService.getSingleDino(dinoId);
        return dinosaur;
    }
    @Patch(':id')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async updateDinosaur(@Param('id') dinoId: string, @Body() updateDinosaurDto: UpdateDinosaurDto) {
        const updatedDinosaur = await this.dinosaurService.updateDinosaur(dinoId, updateDinosaurDto);
        return updatedDinosaur;
    }

    @Delete(':id')
    async removeDinosaur(@Param('id') dinoId: string) {
        await this.dinosaurService.deleteDinosaur(dinoId);
        return null;
    }
}
