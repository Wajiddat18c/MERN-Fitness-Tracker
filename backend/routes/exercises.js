const router = require("express").Router();
let Exercise = require("../models/exercise.model");

//localhost:3000/users/
router.route("/").get((req, res) => {
  //retunere users via json
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  //ny instans af user
  const newExercise = new Exercise({ 
      username,
    description,
    duration,
    date
    });

  //gemmer user
  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).join("Error: " + err));
});


//route
module.exports = router;
