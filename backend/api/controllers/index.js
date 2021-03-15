const Language = require('../models/language');


exports.getAllLanguages = (req, res, next) => {
    Language.find().then(
        (language) => {
            if (!language) {
                return res.status(401).json({
                    error: new Error('No languages found!')
                });
            }
            else{
                return res.status(401).json({
                    data: language
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