// ==============================================================================
// IMPORT ORM OBJECT
// ==============================================================================
const orm = require("../config/orm.js");

// ==============================================================================
// BURGER MODEL
// ==============================================================================
const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, values, cb) {
    orm.insertOne("burgers", cols, values, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColValues, condition, cb) {
    orm.updateOne("burgers", objColValues, condition, function(res) {
      cb(res);
    });
  }
};

// ==============================================================================
// EXPORT TO CONTROLLER -> ../controllers/burger_controller.js
// ==============================================================================
module.exports = burger;