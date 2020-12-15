import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post, Put,
  Query,
} from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from './Card';
import data from "./people.json";
@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {
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

      this.createCard(current)

    })
  }

  @Get()
  getAllCards( ): Card[]| undefined{
    return this.cardService.getAllCards();
  }
  @Get('/:name')
  getCardsOf(@Param('name') name): Card[] | any{
    if (name) {
      return this.cardService.getCardsOf(name);
    }
    return this.cardService.getAllCards();
  }

  @Post()
  createCard(@Body() newCard: Card): void {
     this.cardService.addCard(newCard);
  }

  @Put('/:name')
  Favorite(@Param('name') card):void {
    this.cardService.addFavorite(name)
  }

  @Get('/favori')
  getFavorite(@Param('card') name): Card[] | any {
    return this.cardService.getFavorite();
  }

  @Delete('/:name')
  deleteBook(@Param('name') title): void {
    return this.cardService.deleteCard(title);
  }
}
