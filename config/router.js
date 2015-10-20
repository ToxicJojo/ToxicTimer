var express = require('express'),
  router = express.Router();

// Let the sub-routers handle their specific routes.
router.use('/', App.require('router/home'));
router.use('/timer', App.require('router/timer'));
router.use('/template', App.require('router/singleTemplate'));

module.exports = router;
