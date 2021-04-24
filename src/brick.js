import { collisionDetection } from './collision';

class Brick {
  constructor(game, position) {
    const thisBrick = this;

    thisBrick.game = game;
    thisBrick.width = 80;
    thisBrick.height = 20;
    thisBrick.gap = 1;
    thisBrick.position = position;
    thisBrick.color = '#E8E111';
  }

  draw(context) {
    const thisBrick = this;

    context.fillStyle = thisBrick.color;
    context.fillRect(
      thisBrick.position.x,
      thisBrick.position.y,
      thisBrick.width - thisBrick.gap,
      thisBrick.height
    );
  }

  update() {
    const thisBrick = this;
    collisionDetection(thisBrick.game.player, thisBrick);
  }
}

export default Brick;
