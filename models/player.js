const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Player = db.model('Player', {
    id:String,
   name:String,
   nationality:String,
   numberOfGoals:Number,
   _team: {
    type: Schema.Types.ObjectId,
    ref:'Team'
   }

});
module.exports = Player;