const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const participantSchema = mongoose.Schema({
  nickname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthDate: { type: Date, required: true},
  sex: { type: String, required: true},
  disorder: {type: Boolean, required: false},
  schoolDegreeID: { type: Number, required: false},
  maternalLanguageID: { type: Number, required: true},
  spokenLanguageID: { type: Number, required: false},
  regionID: { type: Number, required: true}
});

participantSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Participant', participantSchema);