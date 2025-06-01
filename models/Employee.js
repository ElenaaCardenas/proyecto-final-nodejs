const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  phone: String,
  email: String,
  address: String
});

module.exports = mongoose.model('Employee', employeeSchema);
