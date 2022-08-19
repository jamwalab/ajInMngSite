const router = require('express').Router();
const passport = require('passport');
const { User } = require("../models");

// enable jwt
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const DB = require('../config/db');

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

router.post('/login', (req, res, next) => {
  User.findOne({
    email: req.body.email
  }, async function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      const correctPw = await user.isCorrectPassword(req.body.password);

      if (!correctPw) {
        res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
      }
      else {
        var token = jwt.sign(user.toJSON(), DB.Secret);
        res.json({success: true, token: token, user});
      }
    }
  });
});

router.post('/register', (req, res) => {
  if (!req.body.username || !req.body.password || !req.body.email) {
    res.json({success: false, msg: 'Please provide all the required details'});
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    });
    // save the user
    User.create(newUser)
    .then(userData => {
      var token = jwt.sign(userData.toJSON(), DB.Secret);
      res.json({success: true, token: token, msg: 'Successful created new user.', user: userData});
    })
    .catch(err => {
      console.log(err);
      return res.json({success: false, msg: 'Username already exists.'});
    });
  }
});

module.exports = router;