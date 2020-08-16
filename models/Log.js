const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  type: {
    type: String,
    required: true,
  },
  grams: {
    type: Number,
    required: true,
  },
  totalCals: {
    type: Number,
    required: true
  },
  totalProtein: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Log = mongoose.model('log', LogSchema);