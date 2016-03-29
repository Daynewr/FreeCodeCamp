'use strict';

//* The AI logic for the game **//


function bestMove(game){
    var bestMove;
    var bestScore = -2;

    game.forEach(function(move, index){
        if(move === ' '){
          var score = scoreMove(game, index);
          if(score > bestScore){
            bestScore = score;
            bestMove = move;
          }
        }
    });
    return {score: bestScore, move: bestMove}
};


function scoreMove(game, index){
    //create new game array
    var afterMove = game.minmaxMove(index);
    if(afterMove.movesRemaining() === 0){
      return afterMove.computeWinner(game);
    }
    var reply = bestMove(afterMove);
    return -reply.score;
};


function computeWinner(game){
    game.gameWinner() === false ? 0 : 1;
};
