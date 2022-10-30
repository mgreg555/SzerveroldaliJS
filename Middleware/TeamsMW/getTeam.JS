/**
 * Load a team from the database using the :teamID param
 * The result is saved to res.locals.team
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
     return function (req, res, next) {
    
        setTimeout(function(){
           res.locals.team= {
                name:"Újpest",
                stadium:"Szusza",
                numberOfTrophies:1,
                id:"1"
            };
            next();
        },100)

 }};