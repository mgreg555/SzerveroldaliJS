const renderMW = require('../middleware/renderMW');

const delPlayerMW = require('../middleware/PlayersMW/delPlayer');
const getPlayersMW = require('../middleware/PlayersMW/getPlayers');
const getPlayerMW = require('../Middleware/PlayersMW/getPlayer');
const savePlayerMW = require('../middleware/PlayersMW/savePlayer');

const delTeamMW = require('../middleware/TeamsMW/delTeam');
const getTeamsMW = require('../middleware/TeamsMW/getTeams');
const getTeamMW = require('../Middleware/TeamsMW/getTeam');
const saveteamMW = require('../middleware/TeamsMW/saveTeam');




module.exports = function (app) {
    const objRepo = {};

   
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