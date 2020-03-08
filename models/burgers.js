const orm = require("../config/orm");

// selectAll()
// insertOne()
// updateOne()


let burgers = {
  selectAll: function(cb) {
      orm.selectAll("cheese", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("Special Burger", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("Update My Burger", objColVals, condition, function(res) {
        cb(res);
      });
    },

  };

  module.exports = burgers;