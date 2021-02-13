const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');


exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
      (hash) => {
          const user = new User({
            pseudo: req.body.pseudo,
            email: req.body.email,
            password: hash, //Faire vérification MDP
            dateNaissance: req.body.dateNaissance,
            sexe: req.body.sexe,
            laboratoire: req.body.laboratoire,
            trouble: req.body.trouble,
            niveauScolaireID: req.body.niveauScolaireID,
            langueMatID: req.body.langueMatID, //Liste d'id?
            langueParleID: req.body.langueParleID,
            villeID: req.body.villeID
          });
          user.save().then(
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


exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }).then(
      (user) => {
          if (!user) {
              return res.status(401).json({
                  error: new Error('User not found!')
              });
          }
          bcrypt.compare(req.body.password, user.password).then(
              (valid) => {
                  if (!valid) {
                      return res.status(401).json({
                          error: new Error('Incorrect password!')
                      });
                  }
                  const token = jwt.sign({ userId: user._id },
                      'FannyMarineFlorenceLisaEstefaniaMarusyaRebeccaAliceMarieHélèneJulietteSolangeBérengèreElsa',
                      { expiresIn: '24h' });
                  res.status(200).json({
                      userId: user._id,
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