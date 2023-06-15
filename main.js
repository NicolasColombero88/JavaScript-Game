const canvas = document.querySelector(".game");
const game = canvas.getContext("2d");

const btnUp = document.querySelector(".up");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const btnDown = document.querySelector(".down");

var elementSize;
var canvasSize;
let treesArr = [];
var level = 0;
let lives = 3;
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

const doorPosition = {
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
  treesArr = [];

  if(passLevel == true){
    if(level + 1 < maps.length){
    level ++
    playerPosition.x = undefined;
    playerPosition.y = undefined;
    treesArr = [];
    }else{
      winner()
      return
    }

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

      if(col == 'O'){
        if(!playerPosition.x && !playerPosition.y || passLevel == true){
          playerPosition.x = emojiPosX;
          playerPosition.y = emojiPosY;

          treesArr = [];
        }
      } else if(col == 'I'){
                giftPosition.x = colIndex * elementSize;
                giftPosition.y = rowIndex * elementSize;
      } else if(col == 'X' || col=='C' || col== 'P'){
                treesArr.push({
                  x : colIndex * elementSize,
                  y : rowIndex * elementSize
                })
      }

      game.fillText(emoji, emojiPosX, emojiPosY)

    })
  });
  
  passLevel = false
  
  movePlayer()
  giftCollition()
  treesCollitions()

  console.log([playerPosition.x, playerPosition.y])
  console.log([giftPosition.x, giftPosition.y])
}

function movePlayer(){
  game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

function giftCollition(){
  if((playerPosition.x - elementSize).toFixed(1) == giftPosition.x.toFixed(1) && (playerPosition.y - elementSize).toFixed(1) == giftPosition.y.toFixed(1)){
    passLevel = true;
    startGame(elementSize)
  }
}

function treesCollitions(){
  treesArr.forEach(tree => {
    const treeCollitionX = (playerPosition.x - elementSize).toFixed(1) == tree.x.toFixed(1);
    const treeCollitionY = (playerPosition.y - elementSize).toFixed(1) == tree.y.toFixed(1);
    
    const isCollition = treeCollitionX && treeCollitionY;

    if(isCollition){
      playerPosition.x = undefined;
      playerPosition.y = undefined;

      
      startGame(elementSize)
    }
  })
}

function winner(){
  alert('ganaste!')
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
  if(Math.ceil(playerPosition.y) + 1 < canvasSize){
    playerPosition.y += elementSize;
    startGame(elementSize)
  }
}




