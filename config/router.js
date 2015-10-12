var express = require('express'),
  router = express.Router();

// Let the sub-routers handle their specific routes.
router.use('/', App.require('router/home'));

module.exports = router;
