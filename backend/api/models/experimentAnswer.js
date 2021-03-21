const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const experimentAnswerSchema = mongoose.Schema({
  participantID: { type: Number, required: true},
  experimentID: { type: Number, required: true},
  contact: { type: Boolean, required: true},
  notification: { type: Boolean, required: true},
  content: {type: String, required: true}

});

experimentAnswerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('ExperimentAnswer', experimentAnswerSchema);