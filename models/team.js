const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Team = db.model('Team', {
   name:String,
   stadium:String,
   bumberOfTrophies:Number,
});
module.exports = Team;