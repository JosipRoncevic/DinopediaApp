import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDinosaurDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    period: string;

    @IsNotEmpty()
    @IsString()
    diet: string;
}
