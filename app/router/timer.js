var express = require('express'),
  controller = App.require('controller/timer'),
  router = express.Router();

router.get('/', controller.show);
router.get('/:gameId', controller.showGame);

module.exports = router;
