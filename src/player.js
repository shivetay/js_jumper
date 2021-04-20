class Player {
  constructor(game) {
    const thisPlayer = this;

    thisPlayer.game = game;
    thisPlayer.gameWidth = game.gameWidth;
    thisPlayer.gameHeight = game.gameHeight;
    thisPlayer.width = 20;
    thisPlayer.height = 25;
    thisPlayer.position = {
      // x: game.gameWidth / 2 - thisPlayer.width / 2,
      // y: game.gameHeight - thisPlayer.height - 15,
      x: 6,
      y: 6,
    };
    thisPlayer.color = '#97E811';
    thisPlayer.speedX = 0;
    thisPlayer.speedY = 0;
    thisPlayer.maxSpeed = 7;
    thisPlayer.jumpPower = 11;
    thisPlayer.jumpSpeed = {
      x: 0,
      y: 0,
    };
    thisPlayer.runSpeed = 4;
    thisPlayer.onGround = false;
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
  update(deltaTime) {
    const thisPlayer = this;

    //if no dt no updates happening
    if (!deltaTime) return;
    thisPlayer.position.x += thisPlayer.speedX;
    thisPlayer.position.y += thisPlayer.speedY;

    // wall checks
    if (thisPlayer.position.x < 0) {
      //stop player when hit wall
      thisPlayer.position.x = 0;
    }
    if (thisPlayer.position.x + thisPlayer.width > thisPlayer.gameWidth) {
      //stop player when hit wall not allowing to move player behind wall
      thisPlayer.position.x = thisPlayer.gameWidth - thisPlayer.width;
    }

    if (thisPlayer.position.y < 0) {
      //stop when hit roof
      thisPlayer.position.y = 0;
    }
    if (thisPlayer.position.y + thisPlayer.height > thisPlayer.gameHeight) {
      thisPlayer.position.y = thisPlayer.gameHeight - thisPlayer.height;
    }

    // gravity checks

    if (thisPlayer.onGround) {
      thisPlayer.speedX *= thisPlayer.game.groundFriction;
    } else {
      // thisPlayer.speedX += thisPlayer.game.gravity;
      // thisPlayer.speedY *= thisPlayer.game.airResitance;
      console.log((thisPlayer.speedY *= thisPlayer.game.airResitance), 'air');
      console.log((thisPlayer.speedX += thisPlayer.game.gravity), 'gravity');
    }

    thisPlayer.position.x += thisPlayer.speedX;
    thisPlayer.position.y += thisPlayer.speedY;
  }

  moveLeft() {
    const thisPlayer = this;
    thisPlayer.speedX = -thisPlayer.maxSpeed;
  }

  moveRight() {
    const thisPlayer = this;
    thisPlayer.speedX = thisPlayer.maxSpeed;
  }
  moveDown() {
    const thisPlayer = this;
    thisPlayer.speedY = thisPlayer.maxSpeed;
  }

  moveUp() {
    const thisPlayer = this;
    thisPlayer.speedY -= thisPlayer.jumpPower;
    thisPlayer.onGround = false;
  }
  stop() {
    const thisPlayer = this;
    thisPlayer.speedX = 0;
    thisPlayer.speedY -= thisPlayer.game.gravity;
  }
}

//TODO:
/* gravity checkcs and jump */

export default Player;
