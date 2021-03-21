const Experiment = require('../models/experiment');


exports.saveExperiment = (req, res, next) => {
    const experiment = new Experiment({
        title: req.body.title,
        description: req.body.description,
        guideline: req.body.guideline,
        consentForm: req.body.consentForm,
        content: req.body.content,
        experimentType: req.body.experimentType,
        ageFilter: req.body.ageFilter,
        spokenLanguage: req.body.spokenLanguage,
        nativeLanguage: req.body.nativeLanguage,
        regionID: req.body.regionID,
        schoolLevel: req.body.schoolLevel,
        trouble: req.body.trouble
        //Ajouter researcherID
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
                  error: new Error('experiment impossible to save')
              });
          }
      );
};


/*exports.saveExperiment = (req, res, next) => {
    return res.status(201).json({
        message: 'Coucou successfully created!'
    });
};*/
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


exports.saveExperimentAnswer = (req, res, next) => {
    const experimentAnswer = new ExperimentAnswer({
        participantID: req.body.participantID,
        experimentID: req.body.experimentID,
        content: req.body.content
      });
      experimentAnswer.save().then(
          () => {
              res.status(201).json({
                  message: 'Answer successfully created!'
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