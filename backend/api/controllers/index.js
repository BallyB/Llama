const Language = require('../models/language');
const Region = require('../models/region');
const SchoolDegree = require('../models/schoolDegree');
const Laboratory = require('../models/laboratory');


exports.getAllLanguages = (req, res, next) => {
    Language.find().then(
        (language) => {
            if (!language) {
                return res.status(200).json({
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

exports.getLanguage = (req, res, next) => {
    Language.findOne({ _id: req.params.id }).then(
        (language) => {
            if (!language) {
                return res.status(401).json({
                    error: new Error('No language found!')
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
                return res.status(200).json({
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


exports.getRegion = (req, res, next) => {
    Region.findOne({ _id: req.params.id }).then(
        (region) => {
            if (!region) {
                return res.status(401).json({
                    error: new Error('No region found!')
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

exports.getAllschoolDegrees = (req, res, next) => {
    SchoolDegree.find().then(
        (schoolDegree) => {
            if (!schoolDegree) {
                return res.status(400).json({
                    error: new Error('No school degree found!')
                });
            }
            else{
                return res.status(200).json({
                    data: schoolDegree
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

exports.getSchoolDegree = (req, res, next) => {
    SchoolDegree.findOne({ _id: req.params.id }).then(
        (schooldegree) => {
            if (!schooldegree) {
                return res.status(401).json({
                    error: new Error('No school degree found!')
                });
            }
            else{
                return res.status(200).json({
                    data: schooldegree
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


exports.getAllLaboratories = (req, res, next) => {
    Laboratory.find().then(
        (laboratory) => {
            if (!laboratory) {
                return res.status(400).json({
                    error: new Error('No laboratory found!')
                });
            }
            else{
                return res.status(200).json({
                    data: laboratory
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

exports.getLaboratory = (req, res, next) => {
    Laboratory.findOne({ _id: req.params.id }).then(
        (laboratory) => {
            if (!laboratory) {
                return res.status(401).json({
                    error: new Error('No laboratory found!')
                });
            }
            else{
                return res.status(200).json({
                    data: laboratory
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