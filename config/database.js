var mongoose = require('mongoose');

function connect(connectionString, callback) {
  mongoose.connect(connectionString);

  var db = mongoose.connection;
  // Display an error message if the connection to the database fails.
  db.on('error', console.error.bind(console, 'connection error'));

  // Display a message once the connetion to the database has been made.
  db.once('open', function() {
    console.log('Mongoose connected at:', connectionString);
    callback();
  });
};

module.exports = connect;
