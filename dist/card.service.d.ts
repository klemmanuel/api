import { Card } from './Card';
export declare class CardService {
    private readonly cardRepository;
    constructor();
    addCard(card: Card): void;
    addFavorite(card: Card): void;
    getFavorite(): Card[];
    deleteCard(name: string): void;
    getCardsOf(name: string): Card[] | any;
    getAllCards(): Card[] | any;
}
