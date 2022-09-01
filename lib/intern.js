const Employee = require('../lib/employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        if (!school) {
            throw new Error('Expected parameter "school" to be a non empty string');
        }
        super (name, id, email);
        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };
};

module.exports = Intern;