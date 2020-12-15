
import { NestFactory } from '@nestjs/core';
import { CardModule } from './card.module';
import {CardService} from "./card.service";
import data from './people.json'
import {Card} from "./Card";
async function bootstrap() {
  const app = await NestFactory.create(CardModule);
  console.log('starting ...')


  const cardService = app.get(CardService);
    let current
    for (current in data) {
      if(1!= null) {
        data.forEach(current =>{
          const card : Card = {
            name: current.name ,
            job: current.job ,
            description: current.description ,
            favori: current.favori ,
            date_deces: current.date_deces ,
            date_deces_precision:current.date_deces_precision  ,
            date_naissance: current.date_naissance ,
            date_naissance_precision:current.date_naissance_precision,
            id: current.id ,
            lien_categorie_wikimedia_commons: current.lien_categorie_wikimedia_commons ,
            lien_wikidata: current.lien_wikidata ,
            lien_wikipedia: current.lien_wikipedia ,
            resume:current.resume ,
          }
          this.cardRepository.set(current.name,current)

        })

      }
    }
    console.log('data updated')

  await app.listen(8080);

}

bootstrap();
