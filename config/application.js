var express = require('express'),
  packageJson = require('../package.json'),
  path = require('path'),
  env = process.env.NODE_ENV || 'development';


global.App = {
  app: express(),
  port: 3000,
  env: env,
  version: packageJson.version,
  root: path.join(__dirname, '../app'),
  appPath: function(path) {
    return this.root + '/' + path;
  },
  // Used to require a module that is in the app folder without the hassel of relativ pathing.
  require: function(path) {
    return require(this.appPath(path));
  },
  // Starts the application. It will listen on the port specified in App.port.
  start: function() {
    if (!this.started) {
      // Open the mongodb connection.
      App.require('../config/database')(process.env.DATABASE_URL || 'mongodb://localhost/ToxicTimer', function() {
        // Listen on the given port.
        App.app.listen(App.port);

        console.log('Running ToxicTimer version ' + App.version + ' on port ' + App.port + ' in ' + App.env + ' mode');

        this.started = true;
      });
    } else {
      console.warn('Tried to start the application even though it was already running.')
    }
  }
};


//Jade setup
App.app.set('views', App.appPath("template"));
App.app.set('view engine', 'jade');
App.app.set('view options', {
  pretty: env === 'development'
});

// Middleware
var staticContent = express.static(App.appPath('../public/build'));
App.app.use(staticContent);

var router = require('./router');
App.app.use(router);

// If none of the routes get hit send a 404 response.
App.app.use(function(request, response) {
  response.render('404');
});
