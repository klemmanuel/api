import { CardService } from './card.service';
import { Card } from './Card';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    getAllCards(): Card[] | undefined;
    getCardsOf(name: any): Card[] | any;
    createCard(newCard: Card): void;
    Favorite(card: any): void;
    getFavorite(name: any): Card[] | any;
    deleteBook(title: any): void;
}
