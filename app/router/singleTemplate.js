var express = require('express'),
  router = express.Router();

router.get('/timer/runSelect/:gameId', App.require('controller/singleTemplate/timer/runSelect').show);

module.exports = router;
