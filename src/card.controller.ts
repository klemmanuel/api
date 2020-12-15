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
@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  getAllCards( ): Card[]| undefined{
    if (name) {
      return this.cardService.getCardsOf(name);
    }
    return this.cardService.getAllCards();
  }
  @Get('/:name')
  getCardsOf(@Param('name') name): Card[] | any{
    return this.cardService.getCardsOf(name);
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
