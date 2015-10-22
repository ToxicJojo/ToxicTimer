// Load the splits for the given run.
var getSplits = function(gameId, runName, callback) {
  $.ajax({
    type: 'GET',
    url: '/template/timer/splits/' + gameId + '/' + runName,
    processData: true,
    dataType: 'html',
    success: callback
  });
};

module.exports = getSplits;
