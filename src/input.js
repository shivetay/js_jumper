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

        default:
          break;
      }
    });
  }
}

export default InputHandler;
