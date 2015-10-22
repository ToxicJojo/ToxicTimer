var templates = require('../api/template');

$(document).ready(function() {
  // When the value for the select changes load the run select for the specific value.
  $('#gameSelect').bind('change', function() {
    var gameId = this.value;

    // Load the runSelect template from the server
    // and display it.
    templates.getRunSelect(gameId, function(html) {
      $('#runSelect').html(html);
    });
  });
});
