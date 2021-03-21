const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const regionSchema = mongoose.Schema({
  id: { type: Number, required: true},
  code: { type: Number, required: true},
  name: { type: String, required: true},
  slug: {type: String, required: true}
});

regionSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Region', regionSchema);