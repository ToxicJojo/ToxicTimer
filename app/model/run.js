var mongoose = require('mongoose');

// The schema representing a run.
// A run has a name, a game it belongs to(the abbreviation) and its splits.
var runSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  game: {
    type: String,
    required: true
  },
  splits: [String]
});

// Returns all runs for the given name.
runSchema.statics.getRunsForGame = function(gameAbbrv, callback) {
  this.find({
    gameAbbrv: gameAbbrv
  }, callback);
};

// Compile the schema into a model.
var RunModel = mongoose.model('Run', runSchema);

module.exports = RunModel;
