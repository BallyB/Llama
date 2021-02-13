//On "require" les éléments nécessaires
const express = require('express');
const router = new express.Router();
const Exemple = require('../models/exemple');
const exempleCtr = require('../controllers/exempleController.js');

// Routes de type GET pour récupérer des objets dans la base de données
router.get('/:id', exempleCtr.findOneExemple);
router.get('/', exempleCtr.getAllExemple);

//Possible de faire la même chose pour une inscription, supression, ...

//router.put('/:id', exempleCtr.updateExemple); --> Modification dans la base
//router.delete('/:id', exempleCtr.deleteExemple); --> Supression dans la base
//router.post('/', exempleCtr.createExemple); --> Ajout dans la base