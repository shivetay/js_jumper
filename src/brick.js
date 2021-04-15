// import { collisionDetection } from './collision';

class Brick {
  constructor(game, position) {
    const thisBrick = this;

    thisBrick.game = game;
    thisBrick.width = 80;
    thisBrick.height = 20;
    thisBrick.gap = 1;
    thisBrick.position = position;
    thisBrick.color = '#E8E111';
    thisBrick.markedForDeletion = false;
  }

  draw(context) {
    const thisBrick = this;

    context.fillStyle = thisBrick.color;
    context.fillRect(
      thisBrick.position.x,
      thisBrick.position.y,
      thisBrick.width - thisBrick.gap,
      thisBrick.height - thisBrick.gap
    );
  }

  update() {
    const thisBrick = this;
    // if (thisBrick.game.player.position.x === thisBrick.position.x) {
    //   thisBrick.game.player.speedX = 0;
    // }
    // if (thisBrick.game.player.position.y === thisBrick.position.y) {
    //   thisBrick.game.player.speedY = 0;
    // }
    // if (collisionDetection(thisBrick.game.ball, thisBrick)) {
    //   thisBrick.game.ball.speed.y = -thisBrick.game.ball.speed.y;

    //   thisBrick.markedForDeletion = true;
    // }
  }
}

export default Brick;
