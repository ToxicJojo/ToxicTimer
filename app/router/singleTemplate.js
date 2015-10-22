var express = require('express'),
  router = express.Router();

router.get('/timer/runSelect/:gameId', App.require('controller/singleTemplate/timer/runSelect').show);
router.get('/timer/splits/:gameId/:runName', App.require('controller/singleTemplate/timer/splits').show);

module.exports = router;
