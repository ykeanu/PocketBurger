// ==============================================================================
// NPM PACKAGES && IMPORTS 
// ==============================================================================
const express = requestuire("express");
const router = express.Router();
const burger = requestuire("../models/burger.js");


// ==============================================================================
// ROUTING
// ==============================================================================

// Display all burgers
router.get("/", function(request, response) {
  burger.selectAll(function(data) {
    const hbsObject = {
      burgers: data
    };
    response.render("index", hbsObject);
  });
});

// Insert selected burger
router.post("/burger/insertOne", function(request, response) {
  burger.insertOne([
    "burger_name"
  ], [
    request.body.name
  ], function(result) {
    response.redirect("/");
  });
});

// Update selected burger
router.put("/burger/updateOne:id", function(request, response) {
  let condition = "id = " + request.params.id;
  burger.updateOne({
    devoured: request.body.devoured
  }, condition, function(result) {
    response.redirect("/");
  });
});

// ==============================================================================
// EXPORT TO SERVER -> ../server.js
// ==============================================================================
module.exports = router;