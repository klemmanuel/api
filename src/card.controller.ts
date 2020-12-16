import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from './Card';

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  getAllCards(): Card[] {
    return this.cardService.getAllCards();
  }

  @Get(':name')
  getCardByName(@Param('name') name: string): Card | null {
    return this.cardService.getCardByName(name);
  }

  @Put(':name')
  update(@Param('name') name: string, @Body() card: Card): Promise<Card> {
    return this.cardService.update(name, card);
  }

  @Delete(':name')
  deleteBook(@Param('name') title): void {
    return this.cardService.deleteCard(title);
  }
}
