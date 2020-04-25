const router = require("express").Router();
let User = require("../models/user.model");

//localhost:3000/users/
router.route("/").get((req, res) => {
  //retunere users via json
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  //ny instans af user
  const newUser = new User({ username });

  //gemmer user
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).join("Error: " + err));
});


//route
module.exports = router;
