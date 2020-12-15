
import { NestFactory } from '@nestjs/core';
import { CardModule } from './card.module';
import {CardService} from "./card.service";
import data from './people.json'
async function bootstrap() {
  const app = await NestFactory.create(CardModule);
  console.log('starting ...')


  const cardService = app.get(CardService);
    let current
    for (current in data) {
      if(1!= null) {


      }
    }
    console.log('data updated')

  await app.listen(8080);

}

bootstrap();
