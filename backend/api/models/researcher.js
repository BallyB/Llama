const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const researcherSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  sex: { type: String, required: true},
  laboratory: { type: Number, required: false},
});

researcherSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Researcher', researcherSchema);