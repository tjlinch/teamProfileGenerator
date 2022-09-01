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
                choices: ['Manager', 'Engineer', 'Intern', 'Done creating team-members']
            }
        ]
        ).then(function (input) {
            switch(input.employeeRole) {
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'Done creating team-members':
                    writeHTML();
                    break;
            }
        })
    }
    
    function addManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Enter the managers name'
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is their id?'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is their email?'
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the managers office number?'
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            // console.log(teamArray);
            createTeam();
        });
    };

    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Enter the engineers name'
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is their id?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is their email?'
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the engineers Github username?'
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            // console.log(teamArray);
            createTeam();
        });
    };

    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Enter the interns name'
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is their id?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is their email?'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What school does the intern attend?'
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            // console.log(teamArray);
            createTeam();
        });
    };

    createTeam();
}

function writeHTML () {
    fs.writeFile('./dist/index.html', generateHTML(teamArray), (err) =>
    err ? console.log(err) : console.log('Created index.html file')
    );
}


initApp();