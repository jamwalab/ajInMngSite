const router = require('express').Router();
const { Comment } = require("../models");

router.get('/', (req, res, next) => {
  Comment.find({})
    .then(commentData => res.json(commentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post('/', (req, res, next) => {
  Comment.create(req.body)
    .then(commentData => res.json(commentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;