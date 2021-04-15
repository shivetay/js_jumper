import Game from './game';

import './style.scss';

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

let lastTime = 0;
let game = new Game(canvas.width, canvas.height);
game.start();

const updateAll = (timeStamp) => {
  let deltaTime = timeStamp - lastTime;

  lastTime = timeStamp;

  drawCanvas();

  game.draw(context);
  game.update(deltaTime);

  requestAnimationFrame(updateAll);
};

const drawCanvas = () => {
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);
};

requestAnimationFrame(updateAll);
