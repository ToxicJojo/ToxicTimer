var Game = App.require('model/game');
var Run = App.require('model/run');

var show = function(request, response) {
  // Get all the games in the database.
  Game.getAll(function(error, games) {

    var params = createParams(games, '', [], []);

    App.require('view/timer').show(request, response, params);
  });
};

var showGame = function(request, response) {
  // Get all the games in the database.
  Game.getAll(function(error, games) {
    // Get the gameId from the request parameters.
    var gameId = request.params.gameId;

    Run.getRunsForGame(gameId, function(error, runs) {

      var params = createParams(games, gameId, runs, []);

      App.require('view/timer').show(request, response, params);
    });
  });
};

var showRun = function(request, response) {
  Game.getAll(function(error, games) {
    // Get the gameId from the request parameters.
    var gameId = request.params.gameId;
    Run.getRunsForGame(gameId, function(error, runs) {
      var runName = request.params.runName;
      Run.getRun(gameId, runName, function(error, run) {

        // Check if we found a run with the given name.
        if(run) {
          var params = createParams(games, gameId, runs, run.splits, run.name);

          App.require('view/timer').show(request, response, params);
        } else {
          var params = createParams(games, gameId, runs, []);
          // Add the error notification to the parameter which will be displayed.
          params.notification = {
            type: 'danger',
            message: 'The run with the name ' + runName + ' was not found'
          };

          App.require('view/timer').show(request, response, params);
        }
      });
    });
  });
};


// Games are the games displayed in the select.
// gameId is the id of the preselected game.
// runs is the array containig the runs that should be displayed.
// splits are the splits that will be displayed.
var createParams = function(games, gameId, runs, splits, runName) {
  // Create the params that will be passed to the view.
  var params = {
    page_title: 'ToxicTimer - Timer',
    timer: {
      games: games,
      selectedGame: gameId,
      selectedRun: runName,
      runs: runs,
      splits: splits
    }
  };

  return params;
};

module.exports.show = show;
module.exports.showGame = showGame;
module.exports.showRun = showRun;
