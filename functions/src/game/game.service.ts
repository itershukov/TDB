import { Injectable } from '@nestjs/common';
import {GameModel, NewGameModel} from "./game.model";
import {getRepository} from "fireorm";
import {generateCode} from "./game.helper";

@Injectable()
export class GameService {
  async create(gameData: NewGameModel): Promise<GameModel> {

    const gameModel = new GameModel();
    gameModel.code = generateCode();
    gameModel.participants = [gameData.author];
    gameModel.participantsLimit = gameData.participantsLimit;

    const gameRepo = getRepository<GameModel>(GameModel);

    return gameRepo.create(gameModel);
  }

  get(id: string): Promise<GameModel> {
    const gameRepo = getRepository<GameModel>(GameModel);
    return gameRepo.findById(id);
  }
}
