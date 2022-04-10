/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

/*   Enum of CSS Classes for the static elements   */
var Tiles = {
  Wall: "tile-wall",
  Space: "tile-space",
  Goal: "tile-goal"
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
  Character: "entity-player",
  Block: "entity-block",
  BlockDone: "entity-block-goal"
};

/*  Legend
  W = Wall
  B = Movable block
  P = Player starting position
  G = Goal area for the blocks
*/
var tileMap01 = {
  width: 19,
  height: 16,
  mapGrid: [
      [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
      [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
      [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
      [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
      [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
      [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
      [[' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
      [[' '], [' '], ['W'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
      [['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
      [['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
      [['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['G'], ['G'], ['W']],
      [['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
      [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
      [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
      [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
      [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
  ]
};
//--------------------------------------------------------











var map01 = tileMap01.mapGrid;
var map = tileMap01.mapGrid;



 CreatMap();
 var event



 function startGame () {
  window.addEventListener('keydown', function (a) {
      switch (a.key) {
          case 'ArrowUp':
              a.preventDefault();
              moveUp();
              break;
          case 'ArrowDown':
              a.preventDefault();
              moveDown();
              break;
          case 'ArrowLeft':
              a.preventDefault();
              moveLeft();
              break;
          case 'ArrowRight':
              a.preventDefault();
              moveRight();
              break;
          default:
              break;
      }
  }, false);
}

startGame();

function CreatMap(){

  for (var i = 0; i <tileMap01.height; i++){
     
    for (var j = 0; j < tileMap01.width; j++){
          
        switch (map01[i][j][0]){

              case "W":  SetClass("wall");
                          break;
              case "B":  SetClass("block");
                          break;
              case "P":  SetClass("player");
                          break;
              case "G":  SetClass("goal");
                          break;
              case " ":  SetClass("space");
              break;
              case  " BG": SetClass("block");
              break;
              case "PG":  SetClass("player");

          }
      }
  }
}


function SetClass(ClassName){
  var nodeText, attribute;
  attribute = document.createAttribute("class");
  attribute.value = ClassName;

  nodeText = document.createElement("span");
  
  nodeText.setAttributeNode(attribute);

  document.getElementById("panel").appendChild(nodeText);
}

function updateMap(){
  document.getElementById("panel").innerHTML = "";
  for (var i = 0; i <tileMap01.height; i++){
      for (var j = 0; j < tileMap01.width; j++){
          switch (map01[i][j][0]){
              case "W":  SetClass("wall");
                  break;
              case "B":  SetClass("block");
                  break;
              case "P":  SetClass("player");
                  break;
              case "G":  SetClass("goal");
                  break;
              case " ":  SetClass("space");
              break;
              case  " BG": SetClass("block");
              break;
              case "PG":  SetClass("player");
          }
      }
  }
}



var playerPosx=11;
var playerPosy= 11;
var  playerNextPosx, playerNextPosy;
var goals;



function EmptyPos(){

  map01[playerPosx][playerPosy] = new Array(' ');
}

// push the block!
function pushBlock(boxNextRow, boxNextCol){
  var nextBox = map[boxNextRow][boxNextCol][0];
  //check if the box is remain
  if(nextBox === " " ||nextBox === "G"){
      
      if (nextBox === "G"){
          map[boxNextRow][boxNextCol] = new Array("BG");
          
      }else{
          map[boxNextRow][boxNextCol] = new Array('B');
      }

      //push the box and move the player
      if (nextBox === " " && nextBox === "BG"){
          map[playerNextPosx][playerNextPosy] = new Array("PG");
          map[playerPosx][playerPosy] = new Array('G');
          goals++;
      } else if (nextBox === " " && map[playerNextPosx][playerNextPosy][0] !== "BG" && map[playerPosx][playerPosy][0] === "PG"){
          map[playerNextPosx][playerNextPosy] = new Array("P");
          map[playerPosx][playerPosy] = new Array('G');
          
      } else if (nextBox === "G" && map[playerNextPosx][playerNextPosy][0] === "BG") {
          map[playerNextPosx][playerNextPosy] = new Array("PG");
          map[boxNextRow][boxNextCol] = new Array("BG");
          if (map[playerPosx][playerPosy][0] === "P")
              map[playerPosx][playerPosy] = new Array(' ');
          else if(map[playerPosx][playerPosy][0] === "PG")
              map[playerPosx][playerPosy] = new Array('G');
          goals++;
      } else{
          map[playerNextPosx][playerNextPosy] = new Array('P');
          map[playerPosx][playerPosy] = new Array(' ');
      }

      playerPosx = playerNextPosx;
      playerPosy = playerNextPosy;
  }
}


function moveDown(){
  playerNextPosx = playerPosx +1;
  playerNextPosy = playerPosy;
  

  if (map01[playerNextPosx][playerNextPosy][0] === " "){
    map01[playerNextPosx][playerNextPosy] = new Array('P');
    EmptyPos();

      playerPosx = playerNextPosx;
      playerPosy = playerNextPosy;
      updateMap();
  }else if(map[playerNextPosx][playerNextPosy][0] === "B" || map[playerNextPosx][playerNextPosy][0] === "BG"){//block
    var boxNextRow, boxNextCol;
    boxNextRow = playerNextPosx +1;
    boxNextCol = playerNextPosy;
    pushBlock(boxNextRow, boxNextCol);
    updateMap();
}
}

function moveUp(){
  playerNextPosx = playerPosx - 1;
  playerNextPosy = playerPosy;

  

  if (map01[playerNextPosx][playerNextPosy][0] === " "){
      map01[playerNextPosx][playerNextPosy] = new Array('P');
      EmptyPos();
      
      playerPosx = playerNextPosx;
      playerPosy = playerNextPosy;
      updateMap();
  }else if(map[playerNextPosx][playerNextPosy][0] === "B" || map[playerNextPosx][playerNextPosy][0] === "BG"){//block
    var boxNextRow, boxNextCol;
    boxNextRow = playerNextPosx -1;
    boxNextCol = playerNextPosy;
    pushBlock(boxNextRow, boxNextCol);
    updateMap();
}
}

function moveLeft(){
  playerNextPosx = playerPosx ;
  playerNextPosy = playerPosy - 1;

  if (map01[playerNextPosx][playerNextPosy].toString() === " "){
    map01[playerNextPosx][playerNextPosy] = new Array('P');
    EmptyPos();
      
      playerPosx = playerNextPosx;
      playerPosy = playerNextPosy;
      updateMap();
  }else if(map[playerNextPosx][playerNextPosy][0] === "B" || map[playerNextPosx][playerNextPosy][0] === "BG"){//block
    var boxNextRow, boxNextCol;
    boxNextRow = playerNextPosx ;
    boxNextCol = playerNextPosy-1;
    pushBlock(boxNextRow, boxNextCol);
    updateMap();
}
}

function moveRight(){
  playerNextPosx = playerPosx;
  playerNextPosy = playerPosy + 1;

  if (map01[playerNextPosx][playerNextPosy].toString() === " "){
    map01[playerNextPosx][playerNextPosy] = new Array('P');
    EmptyPos();

    playerPosx = playerNextPosx;
      playerPosy = playerNextPosy;
      updateMap();
  }else if(map[playerNextPosx][playerNextPosy][0] === "B" || map[playerNextPosx][playerNextPosy][0] === "BG"){//block
    var boxNextRow, boxNextCol;
    boxNextRow = playerNextPosx ;
    boxNextCol = playerNextPosy+1;
    pushBlock(boxNextRow, boxNextCol);
    updateMap();
}
} 
