const mongoose = require('mongoose');
const {Schema} = mongoose;

const JoinUsSchema = new Schema ({
  name: String,
  email: {
    type: String,
    unique: true
  },
  contact: String,
  enrollment: String,
  skills: String,
  aboutRotaract: String
});

const JoinUs = mongoose.model('joinus', JoinUsSchema);

module.exports = {
  JoinUs: JoinUs
}