const router = require('express').Router();
const Workout = require('../models/workout.js');

router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((workoutDBs) => {
      res.json(workoutDBs);
    })
});

router.get('/api/workouts/range', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((workoutDBs) => {
      console.log(workoutDBs);
      res.json(workoutDBs);
    })
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((workoutDB) => {
      res.json(workoutDB);
    })
});

router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((workoutDB) => {
      res.json(workoutDB);
    })
});

router.delete('/api/workouts', ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
});

module.exports = router;