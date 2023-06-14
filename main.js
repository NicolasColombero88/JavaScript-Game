const canvas = document.querySelector(".game");
const game = canvas.getContext("2d");

const btnUp = document.querySelector(".up");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const btnDown = document.querySelector(".down");

var elementSize;
var canvasSize;
var level = 0;
var passLevel = false;

window.addEventListener("load", generateCanvas);
window.addEventListener("resize", generateCanvas);

const playerPosition = {
  x: undefined,
  y: undefined
}

const giftPosition = {
  x: undefined,
  y: undefined
}

function generateCanvas() {

  if (window.innerWidth > window.innerHeight) {
    canvasSize = window.innerHeight * 0.75;
  } else {
    canvasSize = window.innerWidth * 0.75;
  }
 
  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementSize = canvasSize / 10;

  startGame(elementSize);
}

function startGame(element) {
  game.textAlign = "end";
  game.font = element + "px san-serif";

  if(passLevel == true){
    level ++
  }

  const map = maps[level];
  const mapRow = map.trim().split('\n');
  const rederMap = mapRow.map(col => col.trim().split(''))

  game.clearRect(0,0, canvasSize, canvasSize);

  rederMap.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {

      const emoji = emojis[col]

      let emojiPosX = element + (element * colIndex);
      let emojiPosY = element + (element * rowIndex);

      if(col == 'I'){
        giftPosition.x = colIndex;
        giftPosition.y = rowIndex;
      }

      
      if(col == 'O'){
        if(!playerPosition.x && ! playerPosition.y || passLevel == true){
          playerPosition.x = emojiPosX;
          playerPosition.y = emojiPosY;

          passLevel = false
        }
      }

      game.fillText(emoji, emojiPosX, emojiPosY)
    })
  });

  movePlayer()
  giftColition()

  console.log([playerPosition.x, giftPosition.x, playerPosition.y,giftPosition.y])
}

function movePlayer(){
  game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

function giftColition(){
  if(playerPosition.x - elementSize -giftPosition.x && Math.ceil(playerPosition.y-elementSize) == Math.ceil(giftPosition.y)){
    passLevel = true;
    startGame(elementSize)
  }
}


window.addEventListener('keydown', moveByKey)
btnUp.addEventListener('click', moveUp)
btnLeft.addEventListener('click', moveLeft)
btnRight.addEventListener('click', moveRight)
btnDown.addEventListener('click', moveDown)

function moveByKey(e){
  if(e.key === 'ArrowUp') moveUp();
  else if(e.key === 'ArrowLeft') moveLeft();
  else if(e.key === 'ArrowRight') moveRight();
  else if(e.key === 'ArrowDown') moveDown();
}
function moveUp() {
  if(Math.ceil(playerPosition.y-elementSize)+1 > elementSize){
    playerPosition.y -= elementSize;
    startGame(elementSize)
  }
}
function moveLeft() {
  if(playerPosition.x > elementSize){
  playerPosition.x -= elementSize;
  startGame(elementSize)
  }
}
function moveRight() {
  if(playerPosition.x < Math.ceil(canvasSize-elementSize)+1)
  playerPosition.x += elementSize;
  startGame(elementSize)
}
function moveDown() {
  if(playerPosition.y < canvasSize){
    playerPosition.y += elementSize;
    startGame(elementSize)
  }
}




