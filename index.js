
var express = require('express');
var router = express.Router();
var app = express()
var startGame = require('./main');
var printGrid = require('./main');
var hitShip = require('./main');
var isGameOver = require('./main');
var Size = require('./constants');
var checkForWinner = require('./main');
var isValidShot = require('./main');




var players = {}
var currentPlayer = 1


router.route('/start').get(function (req, res) {
  players = startGame.startGame()
  res.send({gameStarted: true})
})

//
router.route('/shotFired/:playerId/:x,:y')
  .get(function (req, res) {
    if(req.params['playerId'] != currentPlayer) {
      res.send({error: 'Not Your Turn'})
    } else {
      if(isValidShot.isValidShot(req.params['x'], req.params['y'])) {
        var player = (req.params['playerId'] == 1) ? players.player2 : players.player1;
        result = hitShip.hitShip(req.params['x'], req.params['y'], player)
        if(!result.hit) {
          currentPlayer = (currentPlayer === 1) ? 2: 1;
        }
        res.send(result)
      } else {
        res.send({error: 'Invalid Location'})
      }


    }


  })

// To check if there is a winner
router.route('/winner')
  .get(function(req,res) {
    res.send(checkForWinner.checkForWinner(players))
  })

// To display the grid of a player
router.route('/grid/:playerId/')
  .get(function (req,res) {
    var ships = (req.params['playerId'] == 1) ? players.player1.ships : players.player2.ships;
    res.send(printGrid.printGrid(ships))
  })

app.use('/', router)

app.listen(3005, function () {
  console.log('Example app listening on port 3005!')
})
