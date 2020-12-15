
import { NestFactory } from '@nestjs/core';
import { CardModule } from './card.module';
import {CardService} from "./card.service";
import data from './people.json'
import {Card} from "./Card";
import {Get} from "@nestjs/common";
async function bootstrap() {
  const app = await NestFactory.create(CardModule);
  console.log('starting ...')


  const cardService = app.get(CardService);

    console.log('data updated')

  await app.listen(8080);
}

bootstrap();
