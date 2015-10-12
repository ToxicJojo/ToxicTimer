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
  require: function(path) {
    return require(this.appPath(path));
  },
  start: function() {
    if (!this.started) {
      this.started = true;
      App.app.listen(App.port);
      console.log('Running ToxicTimer version ' + App.version + ' on port ' + App.port + ' in ' + App.env + ' mode');
    } else {
      console.warn('Tried to start the application even though it was already running.')
    }
  }
};
