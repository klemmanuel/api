"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const card_module_1 = require("./card.module");
const card_service_1 = require("./card.service");
const people_json_1 = __importDefault(require("./people.json"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(card_module_1.CardModule);
    console.log('starting ...');
    const cardService = app.get(card_service_1.CardService);
    let current;
    for (current in people_json_1.default) {
        if (1 != null) {
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
    }
    console.log('data updated');
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map