// require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcrypt');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            trim: true,
            required: 'username is required'
        },
        
        password: 
        {
            type: String,
            trim: true,
            required: 'password is required',
            minlength: 4
        },
        
       email: 
       {
            type: String,
            trim: true,
            required: 'email address is required'
       },
       created: 
       {
            type: Date,
            default: Date.now
       },
       update: 
       {
            type: Date,
            default: Date.now
       },
       incidents: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Incident'
        }
       ]
    },
    {
        collection: "users"
    }
);

// configure options for User Model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);