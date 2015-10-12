var express = require('express'),
  controller = App.require('controller/home'),
  router = express.Router();

router.get('/', controller.show);

module.exports = router;
