const task_operation = require('./task_operation/task_operation.route');


const initiateRoutes = (router) => {
    // all modules with routes will be added here
    task_operation(router);
};

module.exports = initiateRoutes;
