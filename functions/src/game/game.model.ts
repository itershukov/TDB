import { Entity, rootCollection, field } from 'firebase-firestorm';
@rootCollection({
  name: 'games',
})
export default class GameModel extends Entity {
  @field({ name: 'code' })
  code!: string;
  @field({ name: 'participantsLimit' })
  participantsLimit!: number;
}
