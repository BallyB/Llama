const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const experimentAnswerSchema = mongoose.Schema({
  participantId: { type: Number, required: true},
  experimentId: { type: Number, required: true},
  contact: { type: Boolean, required: true},
  notification: { type: Boolean, required: true},
  content: {type: String, required: true}

});

experimentAnswerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('ExperimentAnswer', experimentAnswerSchema);