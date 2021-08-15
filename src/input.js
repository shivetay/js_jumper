class InputHandler {
  constructor(player) {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        // left
        case 37:
          player.moveLeft();
          break;

        //up/jump
        case 38:
          player.moveUp();
          break;

        // right
        case 39:
          player.moveRight();
          break;

        // down
        case 40:
          player.moveDown();
          break;

        default:
          break;
      }
    });

    document.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        // left
        case 37:
          if (player.speedX < 0) player.stop();
          break;

        //up/jump
        case 38:
          player.stop();
          break;

        // right
        case 39:
          if (player.speedX > 0) player.stop();
          break;

        // down
        case 40:
          //* change player height to normal height
          player.height = 25;
          break;

        default:
          break;
      }
    });
  }
}

export default InputHandler;
