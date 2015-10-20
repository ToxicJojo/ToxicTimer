// Loads the runSelect filled with the runs for the game with the given shorthand.
// The html returned will be passed to the callback.
var getRunSelect = function(gameAbbrv, callback) {
  $.ajax({
    type: 'GET',
    url: '/template/timer/runSelect/' + gameAbbrv,
    processData: true,
    dataType: 'html',
    success: callback
  });
};

module.exports = getRunSelect;
