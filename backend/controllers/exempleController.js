const bcrypt = require('bcrypt'); //Inutile ici, permet de crypter un mot de passe lors de l'enregistrement d'un user
//On récupère le modèle qui nous intéresse
const User = require('../models/exemple');


/*
on créer une fonction a executer lorsque la route est appelé dans le router
on exporte donc la fonction "GetAllExemple" que l'on crée directement à la suite
en passant toujoursl es 3 mêmes paramètres (req, res, next)
Ensuite on demande grâce à "mongoose" de cherche TOUS les exemples (Exemple.find())
dans la base de donnée et on retourne la réponse ou une erreur
*/
exports.getAllExemple = (req, res, next) => {
    Exemple.find()
      .then(exemples => res.status(200).json(exemples))
      .catch(error => res.status(400).json({ error }));
  };


//Même chose avec un seul exemple (donc spécifier les critères voulues)
exports.findOneExemple = (req, res, next) => {
    Exemple.findOne({ _id: req.params.id })
      .then(exemple => res.status(200).json(exemple))
      .catch(error => res.status(404).json({ error }));
  };