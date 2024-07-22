"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinosaurModule = void 0;
const common_1 = require("@nestjs/common");
const dinosaur_controller_1 = require("./dinosaur.controller");
const dinosaur_service_1 = require("./dinosaur.service");
const mongoose_1 = require("@nestjs/mongoose");
const dinosaurs_schema_1 = require("./schema/dinosaurs.schema");
let DinosaurModule = class DinosaurModule {
};
exports.DinosaurModule = DinosaurModule;
exports.DinosaurModule = DinosaurModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: 'Dinosaurs',
                    schema: dinosaurs_schema_1.DinosaursSchema,
                    collection: 'Dinosaurs'
                }])
        ],
        controllers: [dinosaur_controller_1.DinosaurController],
        providers: [dinosaur_service_1.DinosaurService],
        exports: [dinosaur_service_1.DinosaurService],
    })
], DinosaurModule);
//# sourceMappingURL=dinosaur.module.js.map