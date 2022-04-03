
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

 CreatMap();


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
          }
      }
  }
}



var playerPosx=11;
var playerPosy= 11;
var  playerNextPosx, playerNextPosy;


function EmptyPos(){

  map01[playerPosx][playerPosy] = new Array(' ');
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
  }
}



