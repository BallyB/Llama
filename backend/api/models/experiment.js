const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const experimentSchema = mongoose.Schema({
  title: { type: String, required: true},
  description: { type: String, required: true},
  guideline: { type: String, required: true },
  consentForm: {type: Boolean, required: true},
  content: {type: String, required: false},
  experimentType: {type: Number, required: true}
});

experimentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Experiment', experimentSchema);