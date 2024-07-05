"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DinosaurController = void 0;
const common_1 = require("@nestjs/common");
const dinosaur_service_1 = require("./dinosaur.service");
const create_dinosaur_dto_1 = require("./create-dinosaur.dto");
const update_dinosaur_dto_1 = require("./update.dinosaur.dto");
let DinosaurController = class DinosaurController {
    constructor(dinosaurService) {
        this.dinosaurService = dinosaurService;
    }
    addDinosaur(createDinosaurDto) {
        const generatedId = this.dinosaurService.insertDinosaur(createDinosaurDto.name, createDinosaurDto.period, createDinosaurDto.diet);
        return { id: generatedId };
    }
    getAllDinosaurs() {
        return this.dinosaurService.getDinosaurs();
    }
    getDinosaur(dinoId) {
        return this.dinosaurService.getSingleDino(+dinoId);
    }
    updateDinosaur(dinoId, updateDinosaurDto) {
        return this.dinosaurService.updateDinosaur(+dinoId, updateDinosaurDto);
    }
    removeDinosaur(dinoId) {
        this.dinosaurService.deleteDinosaur(+dinoId);
        return null;
    }
};
exports.DinosaurController = DinosaurController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dinosaur_dto_1.CreateDinosaurDto]),
    __metadata("design:returntype", void 0)
], DinosaurController.prototype, "addDinosaur", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DinosaurController.prototype, "getAllDinosaurs", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DinosaurController.prototype, "getDinosaur", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dinosaur_dto_1.UpdateDinosaurDto]),
    __metadata("design:returntype", void 0)
], DinosaurController.prototype, "updateDinosaur", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DinosaurController.prototype, "removeDinosaur", null);
exports.DinosaurController = DinosaurController = __decorate([
    (0, common_1.Controller)('dinosaurs'),
    __metadata("design:paramtypes", [dinosaur_service_1.DinosaurService])
], DinosaurController);
//# sourceMappingURL=dinosaur.controller.js.map