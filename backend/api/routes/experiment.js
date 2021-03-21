//On "require" les éléments nécessaires
const express = require('express');
const router = new express.Router();
//const Exemple = require('../models/exemple');
const checktoken = require('../middleware/checktoken');
const authparticipant = require('../middleware/authparticipant');
const authresearcher = require('../middleware/authresearcher');
const experimentCtrl = require('../controllers/experiment');
// Routes de type GET pour récupérer des objets dans la base de données
//router.get('/:id', exempleCtr.findOneExemple);
//router.get('/', exempleCtr.getAllExemple);
router.use(checktoken);
//router.get('/experiment', experimentCtrl.getAllExperiments);
//router.get('/experiment/:id', experimentCtrl.getExperiment);
//Possible de faire la même chose pour une inscription, supression, ...

router.post('/createExperiment', authresearcher, experimentCtrl.saveExperiment);
//router.post('/saveExperiment', authresearcher, experimentCtrl.saveExperiment);
//router.put('/:id', exempleCtr.updateExemple); --> Modification dans la base
//router.delete('/:id', exempleCtr.deleteExemple); --> Supression dans la base
//router.post('/', exempleCtr.createExemple); --> Ajout dans la base
module.exports = router;