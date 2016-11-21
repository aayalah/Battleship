var constants = require('./constants')
var Ships = require('./objects')
var Grid = require('./objects')
var Size = require('./constants')


//Creates objects that will store information about each player's ships and positions that have already been hit
function startGame() {
  var ships1 = setUpGrid()
  var ships2 = setUpGrid()
  return {player1: {alreadyHit: {},ships: ships1},player2: {alreadyHit: {},ships: ships2}}
}

//Chooses position for each players ships based on a choice of one of the 5 setups
function setUpGrid() {
  var index = Math.floor(Math.random() * constants.gridConfig.length)
  var shipPositions = constants.gridConfig[index]
  var ships = new Ships.Ships()
  for(var ship in ships.fleet) {
    var positions = shipPositions[ship]
    for(var i = 0; i < positions.length; i++) {
      ships.fleet[ship].addPosition(positions[i][0], positions[i][1])
    }
  }
  return ships
}

//Determines the result of hitting the coordinates specified
//Keeps track for each player whether they have already hit those coordinates before
function hitShip(x,y,player) {
  var {ships} = player;
  ships = ships.fleet
  if(player.alreadyHit[x + ',' + y] !== undefined) return {hit:true, error: 'already taken'}
  player.alreadyHit[x + ',' + y] = true
  for(var ship in ships) {
    var hit = ships[ship].isHit(x,y)
    if(hit && ships[ship].isSunk()) {
      return {hit: true, name: ship, sunk: true}
    } else if(hit){
      return {hit: true, name: ship, sunk: false}
    }
  }

  return {hit:false}
}

//Checks if one player has no ships left
function checkForWinner(players) {
  var player1Ships = players.player1.ships
  var player2Ships = players.player2.ships
  if(isGameOver(player1Ships.fleet)) {
    return {winner: 1};
  } else if(isGameOver(player2Ships.fleet)) {
    return {winner: 2};
  }
  return {error: 'No Winner'}
}

//Checks whether all of the ships have been sunk or not
function isGameOver(ships) {

  for(var ship in ships){
    if(!ships[ship].isSunk()){
      return false
    }
  }
  return true
}

//Creates a 2D array will all of a players ships repesented by '1's
function printGrid(ships) {
  var grid = new Grid.Grid()
  for(var ship in ships.fleet) {
    for(var coord in ships.fleet[ship].coords){
      var coordinates = ships.fleet[ship].coords[coord]
      grid.setCoord(coordinates.x, coordinates.y)
    }
  }
  return grid
}

//Checks if a hit lies within the bounds of the grid
function isValidShot(x,y) {
  return (x >= 0 && x < Size.size) && (y >= 0 && y < Size.size)
}


module.exports.isGameOver = isGameOver
module.exports.startGame = startGame
module.exports.printGrid = printGrid
module.exports.hitShip = hitShip
module.exports.checkForWinner = checkForWinner
module.exports.isValidShot = isValidShot
