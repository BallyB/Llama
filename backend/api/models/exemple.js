/*
On "require" les différent composant don on a besoin.
C'est à dire "mongoose" pour faciliter l'accès à la base MongoDB
et un sous composant de mongoose.
*/
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//Syntaxe pour la création d'un objet "Exemple", ce qu'on appel schema.
//Avec deux paramètres
const exempleSchema = mongoose.Schema({
  titre: { type: String, required: true, unique: true },
  contenu: { type: String, required: true }
});

exempleSchema.plugin(uniqueValidator);
/*
on export le model, important si on veut le "require" ailleurs
en le nommant avec une majuscule par convention et on passant
l'objet en argument
*/
module.exports = mongoose.model('Exemple', exempleSchema);