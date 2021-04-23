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

    //* * brick player collison checks
    let playerBootom =
      thisBrick.game.player.position.y + thisBrick.game.player.height;
    let playerTop = thisBrick.game.player.position.y;
    let playerLeft = thisBrick.game.player.position.x;
    let playerRight =
      thisBrick.game.player.position.x + thisBrick.game.player.width;

    //* *   brick position
    let brickTop = thisBrick.position.y;
    let brickBottom = thisBrick.position.y + thisBrick.height;
    let brickLeft = thisBrick.position.x - thisBrick.game.player.width;
    let brickRight =
      thisBrick.position.x + thisBrick.width + thisBrick.game.player.width;

    if (
      playerBootom >= brickTop &&
      playerTop <= brickBottom &&
      playerLeft >= brickLeft &&
      playerRight <= brickRight
    ) {
      thisBrick.game.player.position.y =
        thisBrick.position.y + thisBrick.gap - thisBrick.game.player.height;
    }
  }
}

export default Brick;
