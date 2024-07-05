import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DinosaurService } from './dinosaur.service';
import { CreateDinosaurDto } from './create-dinosaur.dto';
import { UpdateDinosaurDto } from './update.dinosaur.dto';

@Controller('dinosaurs')
export class DinosaurController {
    constructor(private readonly dinosaurService: DinosaurService) { }

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    addDinosaur(@Body() createDinosaurDto: CreateDinosaurDto) {
        const generatedId = this.dinosaurService.insertDinosaur(
            createDinosaurDto.name,
            createDinosaurDto.period,
            createDinosaurDto.diet,
        );
        return { id: generatedId };
    }

    @Get()
    getAllDinosaurs() {
        return this.dinosaurService.getDinosaurs();
    }

    @Get(':id')
    getDinosaur(@Param('id') dinoId: string) {
        return this.dinosaurService.getSingleDino(+dinoId);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    updateDinosaur(
        @Param('id') dinoId: string,
        @Body() updateDinosaurDto: UpdateDinosaurDto,
    ) {
        return this.dinosaurService.updateDinosaur(+dinoId, updateDinosaurDto);
    }

    @Delete(':id')
    removeDinosaur(@Param('id') dinoId: string) {
        this.dinosaurService.deleteDinosaur(+dinoId);
        return null;
    }
}
