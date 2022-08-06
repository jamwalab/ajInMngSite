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
            required: 'username is required',
            unique : true
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
            required: 'email address is required',
            unique : true
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

User.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
User.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports.User = mongoose.model('User', User);