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
  delete: function(selectedId) {
    return new Promise( (resolve, reject) => {
      let queryString = "DELETE FROM burgers WHERE id = ?"
      connection.query(queryString, selectedId, function(err, data) {
        if (err) throw err;
        resolve(data);
      })
    })
  }
}

module.exports = orm;