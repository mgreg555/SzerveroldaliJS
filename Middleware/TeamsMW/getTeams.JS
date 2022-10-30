/**
 * Load all teams from the database
 * The result is saved to res.locals.teams
 */
 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
     return function (req, res, next) {
        setTimeout(function(){

            res.locals.teams = [
    
                {
                    name:"Újpest",
                    stadium:"Szusza",
                    numberOfTrophies:"1",
                    id:"1"
                },
                {
                    name:"Fradi",
                    stadium:"Groupama",
                    numberOfTrophies:"1",
                    id:"1"
                }
            ];
            next();
        },100)
            
         };
};
