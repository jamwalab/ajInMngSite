let mongoose = require('mongoose');

const Priority = mongoose.Schema(
  {
    description: {
      type: String
    }
  },
  {
    collection: "priority"
  });
  
  module.exports = mongoose.model('Priority', Priority);