var mongoose = require('mongoose');

// The schema representing a run.
// A run has a name, a game it belongs to(the gameId) and its splits.
var runSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gameId: {
    type: String,
    required: true
  },
  splits: [String]
});

// Returns all runs for the given gameId.
runSchema.statics.getRunsForGame = function(gameId, callback) {
  this.find({
    gameId: gameId
  }, callback);
};

// Compile the schema into a model.
var RunModel = mongoose.model('Run', runSchema);

module.exports = RunModel;
