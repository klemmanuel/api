"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const card_module_1 = require("./card.module");
const card_service_1 = require("./card.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(card_module_1.CardModule);
    console.log('starting ...');
    const cardService = app.get(card_service_1.CardService);
    console.log('data updated');
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map