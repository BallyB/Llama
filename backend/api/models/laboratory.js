const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const laboratorySchema = mongoose.Schema({
  name: { type: String, required: true}
});

laboratorySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Laboratory', laboratorySchema);