const bcrypt = require('bcrypt');
const Participant = require('../models/participant');
const Chercheur = require('../models/chercheur');
const jwt = require('jsonwebtoken');


exports.signupParticipant = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
      (hash) => {
          const participant = new Participant({
            pseudo: req.body.pseudo,
            email: req.body.email,
            password: hash, //Faire vérification MDP
            dateNaissance: req.body.dateNaissance,
            sexe: req.body.sexe,
            trouble: req.body.trouble,
            niveauScolaireID: req.body.niveauScolaireID,
            langueMatID: req.body.langueMatID, //Liste d'id?
            langueParleID: req.body.langueParleID,
            villeID: req.body.villeID
          });
          participant.save().then(
              () => {
                  res.status(201).json({
                      message: 'User added successfully!'
                  });
              }
          ).catch(
              (error) => {
                  res.status(500).json({
                      error: error
                  });
              }
          );
      }
  );
};


exports.loginParticipant = (req, res, next) => {
  Participant.findOne({ email: req.body.email }).then(
      (participant) => {
          if (!participant) {
              return res.status(401).json({
                  error: new Error('User not found!')
              });
          }
          bcrypt.compare(req.body.password, participant.password).then(
              (valid) => {
                  if (!valid) {
                      return res.status(401).json({
                          error: new Error('Incorrect password!')
                      });
                  }
                  const token = jwt.sign({ participantId: participant._id },
                      'FannyMarineFlorenceLisaEstefaniaMarusyaRebeccaAliceMarieHélèneJulietteSolangeBérengèreElsa',
                      { expiresIn: '24h' });
                  res.status(200).json({
                      participantId: participant._id,
                      token: token
                  });
              }
          ).catch(
              (error) => {
                  res.status(500).json({
                      error: error
                  });
              }
          );
      }
  ).catch(
      (error) => {
          res.status(500).json({
              error: error
          });
      }
  );
};



//POUR CHERCHEUR


exports.signupChercheur = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const chercheur = new Chercheur({
              prenom: req.body.prenom,
              nom: req.body.nom,
              email: req.body.email,
              password: hash, //Faire vérification MDP
              sexe: req.body.sexe,
              laboratoire: req.body.laboratoire,
              villeID: req.body.villeID
            });
            chercheur.save().then(
                () => {
                    res.status(201).json({
                        message: 'Chercheur added successfully!'
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    );
  };
  
  
  exports.loginChercheur = (req, res, next) => {
    Chercheur.findOne({ email: req.body.email }).then(
        (chercheur) => {
            if (!chercheur) {
                return res.status(401).json({
                    error: new Error('Chercheur not found!')
                });
            }
            bcrypt.compare(req.body.password, chercheur.password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error('Incorrect password!')
                        });
                    }
                    const token = jwt.sign({ chercheurId: chercheur._id },
                        'FannyMarineFlorenceLisaEstefaniaMarusyaRebeccaAliceMarieHélèneJulietteSolangeBérengèreElsa',
                        { expiresIn: '24h' });
                    res.status(200).json({
                        chercheurId: chercheur._id,
                        token: token
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    );
  };