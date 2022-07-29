let mongoose = require('mongoose');

const Status = mongoose.Schema(
  {
    description: {
      type: String
    }
  },
  {
    collection: "status"
  });
  
  module.exports = mongoose.model('Status', Status);