class Player {
  constructor(game) {
    const thisPlayer = this;

    thisPlayer.game = game;
    thisPlayer.gameWidth = game.gameWidth;
    thisPlayer.gameHeight = game.gameHeight;
    thisPlayer.width = 30;
    thisPlayer.height = 60;
    thisPlayer.position = {
      x: game.gameWidth / 2 - thisPlayer.width / 2,
      y: game.gameHeight - thisPlayer.height - 15,
    };
    thisPlayer.color = '#97E811';
    thisPlayer.speed = 0;
  }

  draw(context) {
    const thisPlayer = this;
    context.fillStyle = thisPlayer.color;

    context.fillRect(
      thisPlayer.position.x,
      thisPlayer.position.y,
      thisPlayer.width,
      thisPlayer.height
    );
  }
}

export default Player;
