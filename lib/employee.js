// constructor
function Employee(name, id, email) {
    // validation
    if (!name || !id || !email) {
        throw new Error('Expected parameters "name", "id", and "email" to be non empty strings');
    }

    this.name = name;
    this.id = id;
    this.email = email;
};

// prototype methods
Employee.prototype.getName = function () {
    return this.name;
};

Employee.prototype.getId = function () {
    return this.id;
};

Employee.prototype.getEmail = function () {
    return this.email;
};

Employee.prototype.getRole = function () {
    return 'Employee';
};

module.exports = Employee;