'use strict';

//** All the game logic will be in this file.  The AI belongs in ai.js **//


//create game board
var TicTacToe = function(board){
   this.board = board;
};

//winning moves
TicTacToe.prototype.winningGame = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [0,4,8]
    ];


//check if current move is valid [works]
TicTacToe.prototype.isValidMove = function(move, player){
  var moveValue;
      if(this.board[move] === ' '){
              return true;
      } else {
        moveValue = false;
      }
    return moveValue;
};

//Adds new move to board array [works]
TicTacToe.prototype.addMove = function(move, player){
  if(this.isValidMove(move, player)){
      this.board[move] = player;
  } else {
    //not a valid move
  }
};

//determines if moves are remaining and amount [works]
TicTacToe.prototype.movesRemaining = function () {
  var movesLeft = false;
    this.board.forEach(function(spot){
        if(spot === ' '){
           movesLeft += 1;
        }
    });
    return movesLeft;
}

//check if there is a winner and return it [works]
TicTacToe.prototype.gameWinner = function(){
  var player;
  var winner = false;

  this.winningGame.forEach(function(moves){
      player = newGame.board[moves[0]];
      var board = newGame.board;

      if( player != ' ' && player === board[moves[1]] && player === board[moves[2]]){
		        winner = player;
	    }
  });
  return winner;
};
