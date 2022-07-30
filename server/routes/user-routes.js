const router = require('express').Router();
const { User } = require("../models");

router.get('/', (req, res, next) => {
  User.find({})
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;