import {Controller, Get, Param} from '@nestjs/common';
import {GameService} from "./game.service";
import GameModel from "./game.model";

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get(':id')
  findOne(@Param('id') id: string): GameModel {

    return this.gameService.get(id);
  }
}
