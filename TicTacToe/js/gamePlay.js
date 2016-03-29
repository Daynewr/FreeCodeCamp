'use strict';

//* Impliments the rules of the game and interacts with DOM*//


//start the game
var newGame;
var playerTurn;
var GameOver = false;

function startGame(){
  newGame = new TicTacToe([' ',' ',' ',' ',' ',' ',' ',' ',' ']);
};


//make game move & check winner [works]
TicTacToe.prototype.makeMove = function(move, player){
  if(playerTurn && this.movesRemaining() > 0){
    this.addMove(move, player);
    if(this.gameWinner()){
        gameOver = true;
    }
  }
};

//Minmax helper
TicTacToe.prototype.minmaxMove(game, index){
    //make new copy of board
};
