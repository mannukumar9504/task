/* eslint-disable import/extensions */
const { client } = require('../../config/dbconnectionManager')

/**
 * assigntask: to assign task to a team
 * @param {*} req
 * @returns
 */
const assignedtask = async (req, res) => {
    try {
        const {task, team_id} = req.body;
        let selectedTeam = '';
        let employeetoAssignTask = {};
        const getTeamsInfoSql = `SELECT id, employee_name, priority, team_id from employee where team_id = ${team_id}`;

        client.query(getTeamsInfoSql, (err, result) => {
            if (err) throw err;
            selectedTeam = result[0].team_id;
            employeetoAssignTask = tasktoAssign(result);

            const insertQuery = `INSERT INTO assigned_task (${`team_id`},${`employee_id`},${`task`}) VALUES ('${employeetoAssignTask.team_id}','${employeetoAssignTask.id}','${task}')`;
        client.query(insertQuery, (err, result) => {
            if(err) throw err;
            if(result) {
                return res.status(200).send({message: `${task} task assigned to ${employeetoAssignTask.employee_name} having prioty ${employeetoAssignTask.priority} for selected team`})
            }
        })
        });
        
    } catch (err) {
        return res.send({ errorMessage: err.message });
    }
};

/**
 * getAllTeams:  get the list of teams
 * @param {*} req
 * @returns
 */
const getAllTeams = async (req, res) => {
    try {
        const sql = `SELECT * from teams`;
        client.query(sql, (err, result) => {
            if (err) throw err;
            return res.send({ result: result });
        });

    }
    catch (err) {
        return res.send({ errorMessage: err.message })
    }
};
/**
 * function to select employee having high priority
 * @param {} data 
 * @returns 
 */
const tasktoAssign = (data) => {
    let highPriority = {priority: data[0].priority, index: 0};

    for(let i = 1; i< data.length ; i++) {

        if(highPriority.priority > data[i].priority){
            highPriority.priority = data[i].priority;
            highPriority.index = i;
        }
    }
    return data[highPriority.index];
}

module.exports = {
    assignedtask,
    getAllTeams

};
