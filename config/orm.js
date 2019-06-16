var connection = require('./connection');

var orm = {
  allLoad: function(table) {
    return new Promise( (resolve, reject) => {
      let queryString = "SELECT * FROM ??"
      connection.query(queryString, table, function(err, data) {
        if (err) throw err;
        console.log(data)
        resolve(data)
      })
    })
  }
}

module.exports = orm;