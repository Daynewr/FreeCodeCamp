'use strict';

//* Impliments the rules of the game and interacts with DOM*//


//start the game
var newGame;
var playerTurn = true;
var GameOver = false;

var startGame = function(){
  newGame = new TicTacToe([' ',' ',' ',' ',' ',' ',' ',' ',' ']);
};


//make game move & check winner
TicTacToe.prototype.makeMove = function(move, player){
  if(playerTurn && this.movesRemaining() > 0){
    this.addMove(move,player);
    if(this.gameWinner()){
        gameOver = true;
    }
    playerTurn = false;
  }

};
