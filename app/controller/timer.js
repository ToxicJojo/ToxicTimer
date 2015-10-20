var Game = App.require('model/game');

var show = function(request, response) {
  // Get all the games in the database.
  Game.getAll(function(error, games) {

    var params = {
      page_title: 'ToxicTimer - Timer',
      timer: {
        games: games
      }
    };

    App.require('view/timer').show(request, response, params);
  });
};

module.exports.show = show;
