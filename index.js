const renderMW = require('../middleware/renderMW');
const delplayerMW = require('../middleware/player/delplayerMW');
const getplayerekMW = require('../middleware/player/getplayerekMW');
const getplayerMW = require('../middleware/player/getplayerMW');
const saveplayerMW = require('../middleware/player/saveplayerMW');
const delteamMW = require('../middleware/team/delteamMW');
const getteamkMW = require('../middleware/team/getteamkMW');
const getteamMW = require('../middleware/team/getteamMW');
const getTopteamkMW = require('../middleware/team/getTopteamkMW');
const saveteamMW = require('../middleware/team/saveteamMW');

module.exports = function (app) {
    const objRepo = {};

    app.use('/',
        getTopteamkMW(objRepo),
        checkPassMW(objRepo),
        renderMW(objRepo, 'index'));

    app.get('/team',
        authMW(objRepo),
        getteamMW(objRepo),
        renderMW(objRepo, 'teamlista'));
    app.use('/team/new',
        authMW(objRepo),
        saveteamMW(objRepo),
        renderMW(objRepo, 'teameditnew'));
    app.use('/team/edit/:teamid',
        authMW(objRepo),
        getteamMW(objRepo),
        saveteamMW(objRepo),
        renderMW(objRepo, 'teameditnew'));
    app.get('/team/del/:teamid',
        authMW(objRepo),
        getteamMW(objRepo),
        delteamMW(objRepo));

    app.get('/player/:teamid',
        authMW(objRepo),
        getteamMW(objRepo),
        getplayerekMW(objRepo), 
        renderMW(objRepo, 'egyteamplayerjei'));
    app.use('/player/:teamid/new',
        authMW(objRepo),
        getteamMW(objRepo),
        saveplayerMW(objRepo),
        renderMW(objRepo, 'playereditnew'));
    app.use('/player/:teamid/edit/:playerid',
        authMW(objRepo),
        getteamMW(objRepo),
        getplayerMW(objRepo),
        saveplayerMW(objRepo),
        renderMW(objRepo, 'playereditnew'));
    app.get('/player/:teamid/del/:playerid',
        authMW(objRepo),
        getteamMW(objRepo),
        getplayerMW(objRepo),
        delplayerMW(objRepo),
        renderMW(objRepo, 'playereditnew'));
};