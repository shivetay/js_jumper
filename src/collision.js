export const collisionDetection = (player, gameObejct) => {
  //* *  player position
  let playerBootom = player.position.y + player.height;
  let playerTop = player.position.y;
  let playerLeft = player.position.x;
  let playerRight = player.position.x + player.width;

  //* *   brick position
  let objectTop = gameObejct.position.y;
  let objectBottom = gameObejct.position.y + gameObejct.height;
  let objectLeft = gameObejct.position.x - player.width;
  let objectRight = gameObejct.position.x + gameObejct.width + player.width;
  let objectLeftBottom =
    gameObejct.position.x - gameObejct.height - player.width;

  //* * brick player collison checks
  if (
    playerBootom >= objectTop &&
    playerTop <= objectBottom &&
    playerLeft >= objectLeft &&
    playerRight <= objectRight
  ) {
    player.position.y = gameObejct.position.y + gameObejct.gap - player.height;
  }
};
