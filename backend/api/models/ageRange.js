const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ageRangeSchema = mongoose.Schema({
  ageRangeID: { type: Number, required: true},
  startingAge: { type: Number, required: true},
  EndingAge: {type: Number, required: true}
});

ageRangeSchema.plugin(uniqueValidator);

module.exports = mongoose.model('AgeRange', ageRangeSchema);