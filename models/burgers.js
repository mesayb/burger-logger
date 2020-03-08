const orm = require("../config/orm");

let burgers = {
  selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },

    insertOne: function(vals, cb) {
      orm.insertOne("burgers", "burger_name", vals, function(res) {
        cb(res);
      });
    },

    updateOne: function(condition, cb) {
      orm.updateOne("burgers", condition, function(res) {
        cb(res);
      });
    },
  };

  module.exports = burgers;
