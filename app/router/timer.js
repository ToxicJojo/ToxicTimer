var express = require('express'),
  controller = App.require('controller/timer'),
  router = express.Router();

router.get('/', controller.show);

module.exports = router;
