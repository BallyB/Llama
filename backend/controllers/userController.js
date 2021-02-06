const bcrypt = require('bcrypt');
const User = require('../models/exemple');



exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          pseudo: req.body.pseudo,
          sexe : req.body.sexe,
          departement: req.body.departement,
          city: req.body.city,
          trouble: req.body.trouble,
          degree: req.body.degree,
          maternal_languages: req.body.maternal_languages, //Liste d'id?
          other_languages: req.body.other_languages,
          password: hash //Faire vérification MDP
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };