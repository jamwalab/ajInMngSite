const mongoose = require('mongoose');

const Incident = mongoose.Schema(
{
  description: {
    type: String,
    required: 'Description is required'
  },
  createdBy: {
    type: String,
    required: true
  },
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Status'
  },
  priority: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Status'
  },
  createdOn: 
  {
       type: Date,
       default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
},
{
  collection: "incident"
});

module.exports = mongoose.model('Incident', Incident);