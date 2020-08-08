import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {GameService} from "./game.service";
import {NewGameModel, GameModel} from "./game.model";

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post()
  create(@Body() gameData: NewGameModel): Promise<GameModel> {
    return this.gameService.create(gameData);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GameModel> {

    return this.gameService.get(id);
  }
}
