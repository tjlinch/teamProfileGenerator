const generateHTML = require('./src/template');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');

const teamArray = [];

function initApp () {

    function createTeam () {
        inquirer.prompt(
            [{
                type: 'list',
                message: 'Which employee would you like to create?',
                name: 'employeeRole',
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ]
        ).then(function (input) {
            switch(input.employeeRole) {
                case 'Manager':
                    addManager();
                    break;
            }
        })
    }
    createTeam();
}


initApp();