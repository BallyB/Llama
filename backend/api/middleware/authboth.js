const jwt = require('jsonwebtoken');
const Researcher = require('../models/researcher');
const Participant = require('../models/participant');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, 'FannyMarineFlorenceLisaEstefaniaMarusyaRebeccaAliceMarieHélèneJulietteMBSolangeBérengèreElsa', function (err, decoded) {
            // err
            if (err) {
                jwt.verify(token, 'AnthonyMorganLaetitiaAdrienCelinaClaraThibaultJuanitoGuillaumeElisaLéaCinthiaAmélie', function (err, decoded) {
                    // err
                    if (err) {
                        throw 'Invalid Token';
                    } else {
                        const userId = decoded.researcherId;
                        if (req.body.userId && req.body.userId !== userId) {
                            throw 'Invalid user ID';
                        } else {
                            Researcher.findOne({ _id: req.body.userId }).then(
                                (researcher) => {
                                    if (!researcher) {
                                        return res.status(401).json({
                                            error: new Error('Non existing user!')
                                        });
                                    } else {
                                        next();
                                    }
                                }
                            ).catch(
                                (error) => {
                                    res.status(500).json({
                                        error: new Error('Unable to find in database')
                                    });
                                }
                            );
                        }

                    }
                });
            } else {
                const userId = decoded.participantId;
                if (req.body.userId && req.body.userId !== userId) {
                    throw 'Invalid user ID';
                } else {
                    Participant.findOne({ _id: userId }).then(
                        (participant) => {
                            if (!participant) {
                                return res.status(401).json({
                                    error: new Error('Non existing user!')
                                });
                            } else {
                                next();
                            }
                        }
                    ).catch(
                        (error) => {
                            res.status(500).json({
                                error: new Error('Unable to find in database')
                            });
                        }
                    );
                }
            }

        });


    } catch {
        res.status(401).json({
            error: new Error('Invalid request!'),
            message: "Mauvaise requête"
        });
    }
};