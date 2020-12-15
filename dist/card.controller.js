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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardController = void 0;
const common_1 = require("@nestjs/common");
const card_service_1 = require("./card.service");
const people_json_1 = __importDefault(require("./people.json"));
let CardController = class CardController {
    constructor(cardService) {
        this.cardService = cardService;
        people_json_1.default.forEach(current => {
            const card = {
                name: current.name,
                job: current.job,
                description: current.description,
                favori: current.favori,
                date_deces: current.date_deces,
                date_deces_precision: current.date_deces_precision,
                date_naissance: current.date_naissance,
                date_naissance_precision: current.date_naissance_precision,
                id: current.id,
                lien_categorie_wikimedia_commons: current.lien_categorie_wikimedia_commons,
                lien_wikidata: current.lien_wikidata,
                lien_wikipedia: current.lien_wikipedia,
                resume: current.resume,
            };
            this.createCard(current);
        });
    }
    getAllCards() {
        if (name) {
            return this.cardService.getCardsOf(name);
        }
        return this.cardService.getAllCards();
    }
    getCardsOf(name) {
        return this.cardService.getCardsOf(name);
    }
    createCard(newCard) {
        this.cardService.addCard(newCard);
    }
    Favorite(card) {
        this.cardService.addFavorite(name);
    }
    getFavorite(name) {
        return this.cardService.getFavorite();
    }
    deleteBook(title) {
        return this.cardService.deleteCard(title);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], CardController.prototype, "getAllCards", null);
__decorate([
    common_1.Get('/:name'),
    __param(0, common_1.Param('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], CardController.prototype, "getCardsOf", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CardController.prototype, "createCard", null);
__decorate([
    common_1.Put('/:name'),
    __param(0, common_1.Param('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CardController.prototype, "Favorite", null);
__decorate([
    common_1.Get('/favori'),
    __param(0, common_1.Param('card')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], CardController.prototype, "getFavorite", null);
__decorate([
    common_1.Delete('/:name'),
    __param(0, common_1.Param('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CardController.prototype, "deleteBook", null);
CardController = __decorate([
    common_1.Controller('cards'),
    __metadata("design:paramtypes", [card_service_1.CardService])
], CardController);
exports.CardController = CardController;
//# sourceMappingURL=card.controller.js.map