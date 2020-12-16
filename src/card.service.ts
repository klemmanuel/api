import { Injectable, OnModuleInit } from '@nestjs/common';
import { Card } from './Card';
import data from './people.json';

@Injectable()
export class CardService implements OnModuleInit {
  private readonly cardRepository: Map<string, Card> = new Map();

  onModuleInit() {
    data.forEach(current => this.cardRepository.set(current.name.toLowerCase(), current));
    console.log('data updated');
  }

  getFavorite(): Card[] {
    return Array.from(this.cardRepository.values()).filter(
      current => current.favori == true,
    );
  }

  deleteCard(name: string): void {
    this.cardRepository.delete(name.toLowerCase());
  }

  getCardByName(name: string): Card | null {
    return this.cardRepository.get(name.toLowerCase());
  }

  getAllCards(): Card[] {
    return Array.from(this.cardRepository.values());
  }

  async update(name: string, card: Card): Promise<Card> {
    this.cardRepository.set(name.toLowerCase(), card);
    return this.cardRepository.get(name);
  }
}
