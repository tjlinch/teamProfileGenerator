const Employee = require('../lib/employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        if (!github) {
            throw new Error('Expected parameter "github" to be a non empty string');
        }
        super (name, id, email);
        this.github = github;
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return 'Engineer';
    };
}

module.exports = Engineer;