const bcrypt = require('bcrypt');
const Participant = require('../models/participant');
const Researcher = require('../models/researcher');
const jwt = require('jsonwebtoken');


exports.signupParticipant = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
      (hash) => {
          const participant = new Participant({
            nickname: req.body.nickname,
            email: req.body.email,
            password: hash, //Faire vérification MDP
            birthDate: req.body.birthDate,
            sex: req.body.sex,
            disorder: req.body.disorder,
            schoolDegreeID: req.body.schoolDegreeID,
            maternalLanguageID: req.body.maternalLanguageID, //Liste d'id?
            spokenLanguageID: req.body.spokenLanguageID,
            cityID: req.body.cityID
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
                      'FannyMarineFlorenceLisaEstefaniaMarusyaRebeccaAliceMarieHélèneJulietteMBSolangeBérengèreElsa',
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


exports.signupResearcher = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const researcher = new Researcher({
              firstname: req.body.firstname,
              name: req.body.name,
              email: req.body.email,
              password: hash, //Faire vérification MDP
              sex: req.body.sex,
              laboratory: req.body.laboratory,
              cityID: req.body.cityID
            });
            researcher.save().then(
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
  
  
  exports.loginResearcher = (req, res, next) => {
    Researcher.findOne({ email: req.body.email }).then(
        (researcher) => {
            if (!researcher) {
                return res.status(401).json({
                    error: new Error('Chercheur not found!')
                });
            }
            bcrypt.compare(req.body.password, researcher.password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error('Incorrect password!')
                        });
                    }
                    const token = jwt.sign({ researcherId: researcher._id },
                        'FannyMarineFlorenceLisaEstefaniaMarusyaRebeccaAliceMarieHélèneJulietteMBSolangeBérengèreElsa',
                        { expiresIn: '24h' });
                    res.status(200).json({
                        researcherId: researcher._id,
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