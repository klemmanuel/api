import { Injectable } from '@nestjs/common';
import { Card } from './Card';
import data from './people.json'

@Injectable()
export class CardService {
    private readonly cardRepository: Map<string, Card> = new Map();
    constructor() {
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

  addCard(card: Card): void{
     this.cardRepository.set(card.name, card);
  }
  addFavorite(card: Card): void {
    const old = this.cardRepository.get((card.name))
    const favoriteCard : Card = {
     name: old.name ,
     job: old.job ,
     description: old.description ,
     favori: !old.favori ,
     date_deces: old.date_deces ,
     date_deces_precision:old.date_deces_precision  ,
     date_naissance: old.date_naissance ,
     date_naissance_precision:old.date_naissance_precision  ,
     id: old.id ,
     lien_categorie_wikimedia_commons: old.lien_categorie_wikimedia_commons ,
     lien_wikidata: old.lien_wikidata ,
     lien_wikipedia: old.lien_wikipedia ,
     resume:old.resume ,
    }
    this.cardRepository.set(favoriteCard.name, favoriteCard)
  }
  getFavorite(): Card[]{
    return Array.from(this.cardRepository.values()).filter(current => {
      if(current.favori==true){return 1 }
      else return 0
    })
  }


  deleteCard(name: string): void{
     this.cardRepository.delete(name );
  }

  getCardsOf(name: string): Card[] | any {
    return Array.from(this.cardRepository.values()).filter( current => {
      if (current.name == name) {
        return 1
      } else return 0
    });
  }

  getAllCards(): Card[] | any {
    return Array.from(this.cardRepository.values())
  }



}
