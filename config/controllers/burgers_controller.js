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


router.post("/api/burgers", (req, res) => {
  console.log("post = " , req.body);
  burgers.insertOne( [
    req.body.burger_name
  ], function(result) {
    // Send back the ID of the new quote
    // res.json({ id: result.insertId });
    res.redirect('/')
  });
});

router.put("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.updateOne( condition, function(result) {
    if (result.changedRows == 0) {

      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;