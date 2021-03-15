const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const experimentSchema = mongoose.Schema({
  title: { type: String, required: true},
  description: { type: String, required: true},
  guideline: { type: String, required: true },
  consentForm: {type: Boolean, required: true},
  content: {type: String, required: false},
  experimentType: {type: Number, required: true},
  ageFilter: {type: String, required: false},
  spokenLanguage: {type: String, required: false},
  nativeLanguage: {type: String, required: true},
  departement: {type: Number, require: false},
  schoolLevel: {type: Number, required: false},
  trouble: {type: Boolean, required: true}
  //Ajouter researcherID
});

experimentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Experiment', experimentSchema);