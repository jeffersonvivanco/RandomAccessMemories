const mongoose = require('mongoose');


//my schema goes here

let Photo = new mongoose.Schema({
  url:String,
  tags:[String],
  country:String,
  name:String
});

mongoose.model('Photo', Photo);
mongoose.connect('mongodb://user:password@ds127132.mlab.com:27132/random-access-memories');
