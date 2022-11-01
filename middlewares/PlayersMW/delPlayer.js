/**
 * Removes a player from the database, the entity used here is: res.locals.player
 * Redirects to /players/:teamid after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};