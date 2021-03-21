const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const schoolDegreeSchema = mongoose.Schema({
  name: { type: String, required: true},
});

schoolDegreeSchema.plugin(uniqueValidator);

module.exports = mongoose.model('SchoolDegree', schoolDegreeSchema);