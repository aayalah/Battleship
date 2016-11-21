Node.js/Express/Javascript backend for Battleship game

An API developed using Node.js/Express that provides the functionality to play a game of Battleship

The API consists of:

/start - Creates and places each players ships onto a grid

/shotFired/playerId/x,y - Used by each player to choose a location to attack, returns whether a ship was hit

/winner - returns whether there is a winner

/grid/playerId/ - returns a 2D array representation of a players grid with the ships' positions


To Run

Have npm installed

clone repository: git clone git@github.com:aayalah/Battleship.git

run: npm install

run: node index.js

on browser: http://localhost:3005/start

