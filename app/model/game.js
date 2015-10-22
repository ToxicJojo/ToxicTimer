var mongoose = require('mongoose');

// The Schema representing a game.
// A game has a name and a gameId.
var gameSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  gameId: {
    type: String,
    required: true,
    unique: true
  }
});

// Returns all games in the database.
gameSchema.statics.getAll = function(callback) {
  this.find(callback);
};

// Compile the schema to a model.
var GameModel = mongoose.model('Game', gameSchema);

module.exports = GameModel;
