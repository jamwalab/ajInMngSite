const router = require('express').Router();
const { Incident, Status } = require("../models");

router.get('/', (req, res, next) => {
  Incident.find({})  
    .populate('status')
    .populate('priority')
    .then(incidentData => res.json(incidentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post('/', (req, res, next) => {
  Incident.create(req.body)
    .then(incidentData => res.json(incidentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;