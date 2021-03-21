const Language = require('../models/language');
const Region = require('../models/region');


exports.getAllLanguages = (req, res, next) => {
    Language.find().then(
        (language) => {
            if (!language) {
                return res.status(401).json({
                    error: new Error('No languages found!')
                });
            }
            else{
                return res.status(200).json({
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

exports.getAllRegions = (req, res, next) => {
    Region.find().then(
        (region) => {
            if (!region) {
                return res.status(401).json({
                    error: new Error('No regions found!')
                });
            }
            else{
                return res.status(200).json({
                    data: region
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