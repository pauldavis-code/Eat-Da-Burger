var express = require('express');
var exphbs = require('express-handlebars');
var orm = require('../config/orm')

var router = express.Router();

router.post('/api/burgers', function(req, res) {
  let results = orm.addNew(req.body.name);
  results.then((data) => {
    let load = orm.allLoad()
    load.then((allBurgers) => {
      return res.end()
    })
  })
});

module.exports = router;