import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {GameService} from "./game.service";
import {NewGameModel, GameModel, JoinGameModel} from "./game.model";

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post()
  create(@Body() gameData: NewGameModel): Promise<GameModel> {
    return this.gameService.create(gameData);
  }

  @Put('/:id')
  join(@Param('id') id: string, @Body() gameData: JoinGameModel): Promise<GameModel> {
    return this.gameService.join(id, gameData);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GameModel> {

    return this.gameService.get(id);
  }
}
