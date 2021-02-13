const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  pseudo: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateNaissance: { type: Date, required: true},
  sexe: { type: String, required: true},
  laboratoire: { type: Number, required: false},
  trouble: {type: Boolean, required: false},
  niveauScolaireID: { type: Number, required: false},
  langueMatID: { type: Number, required: false},
  langueParleID: { type: Number, required: false},
  villeID: { type: Number, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);