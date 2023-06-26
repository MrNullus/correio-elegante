const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Hello");
});

app.post("/register", (req, res) => {
  // const { name } = req.body;


  let mysql = "INSERT INTO games ( name, cost, category) VALUES (?, ?, ?)";
  db.query(mysql, [], (err, result) => {
    res.send(result);
  });
});


module.exports = router;