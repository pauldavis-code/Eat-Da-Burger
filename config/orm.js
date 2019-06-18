var connection = require('./connection');

var orm = {
  allLoad: function() {
    return new Promise( (resolve, reject) => {
      let queryString = "SELECT * FROM burgers"
      connection.query(queryString, function(err, data) {
        if (err) throw err;
        resolve(data)
      })
    })
  },
  addNew: function(name) {
    return new Promise( (resolve, reject) => {
      let queryString = "INSERT INTO burgers (name) VALUES (?)"
      connection.query(queryString, name, function(err, data) {
        if (err) throw err;
        resolve(data);
      })
    })
  },
  update: function(selectedId) {
    return new Promise( (resolve, reject) => {
      let queryString = "UPDATE burgers SET eaten=true WHERE id=?"
      connection.query(queryString, selectedId, function(err, data) {
        if (err) throw err;
        resolve(data);
      })
    })
  }
}

module.exports = orm;