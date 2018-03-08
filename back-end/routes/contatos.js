var express = require('express');
var controller = require('../controllers/contatos');
var router = express.Router();

router.get('/', function(req, res, next) {
  controller().listar(req, res);
});

module.exports = router;
