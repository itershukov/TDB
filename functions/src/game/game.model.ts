import {Collection, IEntity} from 'fireorm';
import {IsArray, IsInt, IsNotEmpty, Max, MaxLength, Min, MinLength} from 'class-validator';

export class NewGameModel{
  @IsInt()
  @Max(30)
  @Min(2)
  participantsLimit: number;

  @MinLength(4, {
    message: 'Name is too short',
  })
  @MaxLength(50, {
    message: 'Name is too long',
  })
  author: string;
}

@Collection('Game')
export class GameModel extends NewGameModel implements IEntity{
  @IsNotEmpty()
  id: string;

  @MinLength(4, {
    message: 'Code is too short',
  })
  @MaxLength(4, {
    message: 'Code is too long',
  })
  code: string;

  @IsArray()
  participants: string[];
}

export class JoinGameModel{

  @MinLength(4, {
    message: 'Name is too short',
  })
  @MaxLength(50, {
    message: 'Name is too long',
  })
  participant: string;
}
