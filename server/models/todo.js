var mongoose = require ('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    strLength: 1
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

module.exports = {Todo};
