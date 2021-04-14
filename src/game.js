import Player from './player';

class Game {
  constructor(gameWidth, gameHeight) {
    const thisGame = this;
    thisGame.gameHeight = gameHeight;
    thisGame.gameWidth = gameWidth;
    // thisGame.gameObjects = [];
  }

  start() {
    const thisGame = this;
    thisGame.player = new Player(thisGame);

    thisGame.gameObjects = [thisGame.player];
  }

  draw(context) {
    const thisGame = this;

    thisGame.gameObjects.forEach((object) => object.draw(context));
  }
}

export default Game;
