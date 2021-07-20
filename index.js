



function superbowlWin(array) {
    let winGame = array.find(function(game) {return game.result === "W"});
    if (winGame) {
      return winGame.year
    } else {
      return undefined
    }
  }