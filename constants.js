
//Possible combinations of ship placement
const GridConfigurations = [{
  Carrier: [[0,1],[0,2],[0,3],[0,4],[0,5]],
  Battleship: [[2,8],[3,8],[4,8],[5,8]],
  Cruiser: [[8,6],[8,7],[8,8]],
  Submarine: [[9,1],[9,2]],
  Destroyer: [[6,2],[6,3]]
},{
  Carrier: [[1,1],[1,2],[1,3],[1,4],[1,5]],
  Battleship: [[3,2],[3,3],[3,4],[3,5]],
  Cruiser: [[7,1],[7,2],[7,3]],
  Submarine: [[4,5],[4,6]],
  Destroyer: [[6,6],[6,7]]
},{
  Carrier: [[5,1],[5,2],[5,3],[5,4],[5,5]],
  Battleship: [[8,1],[8,2],[8,3],[8,4]],
  Cruiser: [[7,3],[7,4],[7,5]],
  Submarine: [[9,8],[9,9]],
  Destroyer: [[0,2],[0,3]]
},{
  Carrier: [[6,1],[6,2],[6,3],[6,4],[6,5]],
  Battleship: [[5,3],[5,4],[5,5],[5,6]],
  Cruiser: [[2,6],[2,7],[2,8]],
  Submarine: [[9,4],[9,5]],
  Destroyer: [[8,2],[8,3]]
},{
  Carrier: [[3,1],[3,2],[3,3],[3,4],[3,5]],
  Battleship: [[7,5],[7,6],[7,7],[7,8]],
  Cruiser: [[9,6],[9,7],[9,8]],
  Submarine: [[5,8],[5,9]],
  Destroyer: [[6,5],[6,6]]
}]

//Used to display grid
const Grid = [[0, 0, 0, 0 ,0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0 ,0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0 ,0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0 ,0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0 ,0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0 ,0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0 ,0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0 ,0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0 ,0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0 ,0, 0, 0, 0, 0, 0]
                    ]

const Size = Grid.length;

module.exports.grid = Grid
module.exports.gridConfig = GridConfigurations
module.exports.size = Size;
