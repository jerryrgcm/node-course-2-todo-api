var mongoose = require ('mongoose');

var User = mongoose.model('User', {
  email: {
    required: true,
    minLength: 1,
    trim: true,
    type: String
  }
});

module.exports = {User};
