import { Test, TestingModule } from '@nestjs/testing';
import { CardController } from './card.controller';
import { CardService } from './card.service';

describe('AppController', () => {
  let appController: CardController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CardController],
      providers: [CardService],
    }).compile();

    appController = app.get<CardController>(CardController);
  });


});
