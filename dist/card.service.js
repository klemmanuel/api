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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardService = void 0;
const common_1 = require("@nestjs/common");
const people_json_1 = __importDefault(require("./people.json"));
let CardService = class CardService {
    constructor() {
        this.cardRepository = new Map();
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
            this.cardRepository.set(current.name, current);
        });
    }
    addCard(card) {
        this.cardRepository.set(card.name, card);
    }
    addFavorite(card) {
        const old = this.cardRepository.get((card.name));
        const favoriteCard = {
            name: old.name,
            job: old.job,
            description: old.description,
            favori: !old.favori,
            date_deces: old.date_deces,
            date_deces_precision: old.date_deces_precision,
            date_naissance: old.date_naissance,
            date_naissance_precision: old.date_naissance_precision,
            id: old.id,
            lien_categorie_wikimedia_commons: old.lien_categorie_wikimedia_commons,
            lien_wikidata: old.lien_wikidata,
            lien_wikipedia: old.lien_wikipedia,
            resume: old.resume,
        };
        this.cardRepository.set(favoriteCard.name, favoriteCard);
    }
    getFavorite() {
        return Array.from(this.cardRepository.values()).filter(current => {
            if (current.favori == true) {
                return 1;
            }
            else
                return 0;
        });
    }
    deleteCard(name) {
        this.cardRepository.delete(name);
    }
    getCardsOf(name) {
        return Array.from(this.cardRepository.values()).filter(current => {
            if (current.name == name) {
                return 1;
            }
            else
                return 0;
        });
    }
    getAllCards() {
        return Array.from(this.cardRepository.values());
    }
};
CardService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], CardService);
exports.CardService = CardService;
//# sourceMappingURL=card.service.js.map