import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateDinosaurDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    name?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    period?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    diet?: string;
}
