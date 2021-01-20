const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
  id: String,
  name: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('data', schema);