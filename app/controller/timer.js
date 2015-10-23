var Game = App.require('model/game');
var Run = App.require('model/run');

var show = function(request, response) {
  // Get all the games in the database.
  Game.getAll(function(error, games) {

    var params = {
      page_title: 'ToxicTimer - Timer',
      timer: {
        games: games,
        runs: [],
        splits: []
      }
    };

    App.require('view/timer').show(request, response, params);
  });
};

var showGame = function(request, response) {
  // Get all the games in the database.
  Game.getAll(function(error, games) {
    var gameId = request.params.gameId;

    Run.getRunsForGame(gameId, function(error, runs) {

      var params = {
        page_title: 'ToxicTimer - Timer',
        timer: {
          games: games,
          selectedGame: gameId,
          runs: runs,
          splits: []
        }
      };

      App.require('view/timer').show(request, response, params);
    });

  });
}

module.exports.show = show;
module.exports.showGame = showGame;
