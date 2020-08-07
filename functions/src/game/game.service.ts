import { Injectable } from '@nestjs/common';
import GameModel from "./game.model";

@Injectable()
export class GameService {
  get(id: string): GameModel {
    return {} as GameModel;
  }
}
