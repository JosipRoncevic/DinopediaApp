import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DinosaurService } from './dinosaur.service';
import { CreateDinosaurDto } from './create-dinosaur.dto';

@Controller('dinosaurs')
export class DinosaurController {
    constructor(private readonly dinosaurService: DinosaurService) { }

    @Post()
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
        console.log('Idem u servis')
        return this.dinosaurService.getSingleDino(+dinoId);
    }

    @Patch(':id')
    updateDinosaur(
        @Param('id') dinoId: string,
        @Body('name') dinoName: string,
        @Body('period') dinoPeriod: string,
        @Body('diet') dinoDiet: string,
    ) {
        this.dinosaurService.updateDinosaur(+dinoId, dinoName, dinoPeriod, dinoDiet);
        return null;
    }

    @Delete(':id')
    removeDinosaur(@Param('id') dinoId: string) {
        this.dinosaurService.deleteDinosaur(+dinoId);
        return null;
    }
}
