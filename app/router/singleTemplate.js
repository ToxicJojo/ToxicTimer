var express = require('express'),
  router = express.Router();

router.get('/timer/runSelect/:gameAbbrv', App.require('controller/singleTemplate/timer/runSelect').show);

module.exports = router;
