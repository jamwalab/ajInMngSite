let mongoose = require('mongoose');

const Comment = mongoose.Schema(
  {
    commentText: {
      type: String,
      required: 'Comment is required'
    },
    createdOn: 
    {
         type: Date,
         default: Date.now
    }
  },
  {
    collection: "comment"
  });
  
  module.exports = mongoose.model('Comment', Comment);