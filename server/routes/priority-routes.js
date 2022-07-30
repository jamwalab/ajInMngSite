const router = require('express').Router();
const { Priority } = require("../models");

router.get('/', (req, res, next) => {
  Priority.find({})
    .then(priorityData => res.json(priorityData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post('/', (req, res, next) => {
  Priority.create(req.body)
    .then(priorityData => res.json(priorityData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;