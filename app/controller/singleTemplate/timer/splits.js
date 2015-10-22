var Run = App.require('model/run');


var show = function(request, response) {
  // Take the runName and gameId from the request parameters.
  var runName = request.params.runName;
  var gameId = request.params.gameId;

  Run.getRun(gameId, runName, function(error, run) {
    // Check if there was a run found.
    if (run) {
      // Save the splits of the run in the params.
      var params = {
        timer: {
          splits: run.splits
        }
      };
      // Render the splits template.
      App.require('view/singleTemplate').show(request, response, params, 'timer/splits');
    } else {
      // If there was no run found return an error.
      response.sendStatus(500);
    }
  });
};


module.exports.show = show;
