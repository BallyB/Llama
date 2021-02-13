const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  pseudo: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateNaissance: { type: Date, required: true},
  sexe: { type: String, required: true},
  laboratoire: { type: Int32Array, required: false},
  trouble: {type: Boolean, required: false},
  niveauScolaireID: { type: Int32Array, required: false},
  langueMatID: { type: Int32Array, required: false},
  langueParleID: { type: Int32Array, required: false},
  villeID: { type: Int32Array, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);