const {
    assignedtask,
    getAllTeams,
} = require('./task_operation.controller');


module.exports = (router) => {
    router.post('/assigntask', (_req, _res) => assignedtask(_req, _res));
    router.get('/getteams', (_req, _res) => getAllTeams(_req, _res));
};
