const router = require('express').Router();
const { Status } = require("../models");

router.get('/', (req, res, next) => {
  Status.find({})
    .then(statusData => res.json(statusData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post('/', (req, res, next) => {
  Status.create(req.body)
    .then(statusData => res.json(statusData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;