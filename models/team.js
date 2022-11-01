const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Team = db.model('Team', {
   id:String,
   name:String,
   stadium:String,
   bumberOfTrophies:Number,
});
module.exports = Team;