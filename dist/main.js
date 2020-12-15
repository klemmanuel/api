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
        }
    }
    console.log('data updated');
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map