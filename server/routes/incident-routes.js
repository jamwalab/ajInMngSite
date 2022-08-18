const router = require('express').Router();
const { Incident, Status, User } = require("../models");

router.get('/', (req, res, next) => {
  Incident.find({})  
    .then(incidentData => res.json(incidentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post('/', (req, res, next) => {

  var newIncident = new Incident({
    description: req.body.description,
    createdBy: req.body.createdBy,
    status: req.body.status,
    priority: req.body.priority
  });

  Incident.create(newIncident)
    .then(incidentData => {
      //User.findByIdAndUpdate
      //User.findOneAndUpdate
      User.findByIdAndUpdate(
        req.body.userId, 
      {
        $push: { incidents: incidentData._id }
      },{
        new: true
      },
      async function(err, user) {
        //console.log(incidentData, user);
        if (err) throw err
        else if (!user) {
          res.status(401).send({success: false, msg: 'User was not found!!'});
        }
        else {
          res.json({incidentData, user});
        }
      })
      //res.json(newIncident);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;