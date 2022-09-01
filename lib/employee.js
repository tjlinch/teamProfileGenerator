class Employee {

    constructor (name, id, email) {
        // validation
        if (!name || !id || !email) {
            throw new Error('Expected parameters "name", "id", and "email" to be non empty strings');
        }
        
        this.name = name;
        this.id = id;
        this.email = email;
    };
    
    // prototype methods
    getName () {
        return this.name;
    };
    
    getId () {
        return this.id;
    };
    
    getEmail () {
        return this.email;
    };
    
    getRole () {
        return 'Employee';
    };
    
};
module.exports = Employee;