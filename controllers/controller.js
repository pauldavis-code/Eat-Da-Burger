var express = require('express');
var exphbs = require('express-handlebars');
var orm = require('./../config/orm')

var router = express.Router();

router.get('/', function(req, res) {
  let result = orm.allLoad('burgers')
  result.then((data) => {
    res.render('index', { allBurgers: data })
  })
})

module.exports = router;