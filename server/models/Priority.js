let mongoose = require('mongoose');

const Status = mongoose.Schema(
  {
    description: {
      type: String
    }
  },
  {
    collection: "priority"
  });
  
  module.exports = mongoose.model('Priority', Priority);