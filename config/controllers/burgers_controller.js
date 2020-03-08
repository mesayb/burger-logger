const express = require('express');
// Import the model (burger.js) to use its database functions.
const burgers = require('../../models/burgers')

let router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burgers.selectAll(function(data) {
    let bgObject = {
      burger: data
    };
    console.log(bgObject);
    res.render("index", bgObject);
  });
});

router.post("/api/burger", (req, res) => {
  burgers.insertOne([
    "buyer_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
   
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Export routes for server.js to use.
module.exports = router;

