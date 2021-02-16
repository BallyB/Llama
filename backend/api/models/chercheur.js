const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const chercheurSchema = mongoose.Schema({
  prenom: { type: String, required: true },
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  sexe: { type: String, required: true},
  laboratoire: { type: Number, required: false},
  villeID: { type: Number, required: true}
});

chercheurSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Chercheur', chercheurSchema);