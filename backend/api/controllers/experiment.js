const Experiment = require('../models/experiment');


exports.saveExperiment = (req, res, next) => {
    const experiment = new Experiment({
        title: req.body.title,
        description: req.body.description,
        guideline: req.body.guideline,
        consentForm: req.body.consentForm,
        content: req.body.content,
        experimentType: req.body.experimentType
      });
      experiment.save().then(
          () => {
              res.status(201).json({
                  message: 'Experiment successfully created!'
              });
          }
      ).catch(
          (error) => {
              res.status(500).json({
                  error: error
              });
          }
      );
};


// A PRECISER PLUS TARD AVEC LES PROFILS UTILISATEURS
exports.getAllExperiments = (req, res, next) => {
    Experiment.find().then(
        (experiment) => {
            if (!experiment) {
                return res.status(401).json({
                    error: new Error('No experiment found!')
                });
            }
            else{
                return res.status(401).json({
                    data: experiment
                });
            }
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    );
}


exports.getExperiment = (req, res, next) => {
    Experiment.findOne({ _id: req.params.id }).then(
        (experiment) => {
            if (!experiment) {
                return res.status(401).json({
                    error: new Error('No experiment found!')
                });
            }
            else{
                return res.status(401).json({
                    data: experiment
                });
            }
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error: error
            });
        }
    );
}