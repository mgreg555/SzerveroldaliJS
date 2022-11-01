const renderMW = require('../middlewares/renderMW');

const delPlayerMW = require('../middlewares/PlayersMW/delPlayer');
const getPlayersMW = require('../middlewares/PlayersMW/getPlayers');
const getPlayerMW = require('../middlewares/PlayersMW/getPlayer');
const savePlayerMW = require('../middlewares/PlayersMW/savePlayer');

const delTeamMW = require('../middlewares/TeamsMW/delTeam');
const getTeamsMW = require('../middlewares/TeamsMW/getTeams');
const getTeamMW = require('../middlewares/TeamsMW/getTeam');
const saveteamMW = require('../middlewares/TeamsMW/saveTeam');



const TeamModel = require('../models/team');
const PlayerModel = require('../models/player');
module.exports = function (app) {
    const objRepo = {
        PlayerModel:PlayerModel,
        TeamModel:TeamModel
    };

   
    app.use('/team/new',
        saveteamMW(objRepo),
        renderMW(objRepo, 'team-form'));

    app.use('/team/edit/:teamid',
        getTeamMW(objRepo),
        saveteamMW(objRepo),
        renderMW(objRepo, 'team-form'));

    app.get('/team/del/:teamid',
        getTeamMW(objRepo),
        delTeamMW(objRepo));

        app.use('/player/:teamid/new',
        getTeamMW(objRepo),
        savePlayerMW(objRepo),
        renderMW(objRepo, 'player-form'));

        app.use('/player/:teamid/edit/:playerid',
        getTeamMW(objRepo),
        getPlayerMW(objRepo),
        savePlayerMW(objRepo),
        renderMW(objRepo, 'player-form'));

        app.get('/player/:teamid/del/:playerid',      
        getTeamMW(objRepo),
        getPlayerMW(objRepo),
        delPlayerMW(objRepo),
        renderMW(objRepo, 'player-form'));


    app.use('/players/:teamid',
        getTeamMW(objRepo),
        getPlayerMW(objRepo),
        renderMW(objRepo, 'player-table'));

  

        app.use('/', getTeamsMW(objRepo),renderMW(objRepo, 'index'));

};