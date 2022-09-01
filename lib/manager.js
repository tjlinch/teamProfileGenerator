const Employee = require('../lib/employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        if (!officeNumber) {
            throw new Error('Expected parameter "officeNumber" to be a non empty string');
        }
        super (name, id, email);
        this.officeNumber = officeNumber;
    };

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;