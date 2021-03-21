let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let workoutSeed = [
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: "resistance",
        name: "training for triceps",
        duration: 15,
        weight: 12,
        reps: 15,
        sets: 3
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [
      {
        type: "resistance",
        name: "training for biceps",
        duration: 15,
        weight: 15,
        reps: 15,
        sets: 3
      }
    ]
  },
    {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: "resistance",
        name: "training for legs",
        duration: 20,
        weight: 35,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: "resistance",
        name: "training for core",
        duration: 20,
        weight: 25,
        reps: 15,
        sets: 5
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 20,
        distance: 5
      }
    ]
  },
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });