var Run = App.require('model/run');

var show = function(request, response) {
  // The abbreviation of the game the runs should be loaded for.
  var gameId = request.params.gameId;

  // Get all the runs for the specific game.
  Run.getRunsForGame(gameId, function(error, runs) {

    var params = {
      timer: {
        runs: runs
      }
    };
    // Render the template.
    App.require('view/singleTemplate').show(request, response, params, 'timer/runSelect');
  });
};

module.exports.show = show;
