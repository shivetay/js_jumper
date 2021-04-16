import Player from './player';
import InputHandler from './input';
import { buildLevel, level1 } from './levels';

class Game {
  constructor(gameWidth, gameHeight) {
    const thisGame = this;
    thisGame.gameHeight = gameHeight;
    thisGame.gameWidth = gameWidth;
    thisGame.bricks = [];
    thisGame.groundFriction = 0.8;
    thisGame.gravity = 0.6;
    thisGame.airResitance = 0.9;
  }

  start() {
    const thisGame = this;

    thisGame.bricks = buildLevel(thisGame, level1);
    thisGame.player = new Player(thisGame);

    thisGame.gameObjects = [thisGame.player, ...thisGame.bricks];

    new InputHandler(thisGame.player, thisGame);
  }

  draw(context) {
    const thisGame = this;

    thisGame.gameObjects.forEach((object) => object.draw(context));
  }

  update(deltaTime) {
    const thisGame = this;
    thisGame.gameObjects.forEach((object) => object.update(deltaTime));
  }
}

export default Game;
