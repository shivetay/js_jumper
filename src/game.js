import Player from './player';
import InputHandler from './input';

class Game {
  constructor(gameWidth, gameHeight) {
    const thisGame = this;
    thisGame.gameHeight = gameHeight;
    thisGame.gameWidth = gameWidth;
    thisGame.groundFriction = 0.8;
    thisGame.gravity = 0.6;
    thisGame.airResitance = 0.9;
  }

  start() {
    const thisGame = this;
    thisGame.player = new Player(thisGame);
    new InputHandler(thisGame.player, thisGame);

    thisGame.gameObjects = [thisGame.player];
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
