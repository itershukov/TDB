import {ForbiddenException, Injectable, NotFoundException} from '@nestjs/common';
import {GameModel, JoinGameModel, NewGameModel} from "./game.model";
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

  async join(id: string, gameData: JoinGameModel): Promise<GameModel> {

    const gameRepo = getRepository<GameModel>(GameModel);
    const gameModel = await gameRepo.findById(id);
    if (!gameModel){
      throw new NotFoundException();
    }

    if (gameModel.participants.length >= gameModel.participantsLimit){
      throw new ForbiddenException('Too many participants');
    }

    gameModel.participants.push(gameData.participant);

    await gameRepo.update(gameModel);
    return gameModel;
  }

  get(id: string): Promise<GameModel> {
    const gameRepo = getRepository<GameModel>(GameModel);
    return gameRepo.findById(id);
  }
}
