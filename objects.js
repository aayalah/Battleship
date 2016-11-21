var constants = require('./constants')

//Coordinate Object
function Coord (x,y) {
  this.x = x
  this.y = y
}

//Ship - keeps track of its position and whether it's status
function Ship() {
  this.coords = {};
  this.isHit = isHit;
  this.addPosition = (x,y) => this.coords[x + "," + y] = new Coord(x,y);
  this.isSunk = () => Object.keys(this.coords).length === 0;
}

var isHit = function(x, y) {
  if(this.coords[x + "," + y] !== undefined){
    delete this.coords[x + "," + y]
    return true
  }
  return false
}


//Stores all the ships belonging to a player
function Ships() {
  this.fleet = {Carrier: new Ship(),
                Battleship: new Ship(),
                Cruiser: new Ship(),
                Submarine: new Ship(),
                Destroyer: new Ship()
              }
}

//Represents Grid with the positions of ships
function Grid() {
  this.grid = constants.grid;
  this.setCoord = (x,y) => this.grid[x][y] = 1;

}

module.exports.Ships = Ships
module.exports.Grid = Grid
