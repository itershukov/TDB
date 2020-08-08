import { Injectable } from '@nestjs/common';
import GameModel from "./game.model";

@Injectable()
export class GameService {
  get(id: string): GameModel {
    return {code: '3e23e'} as GameModel;
  }
}
