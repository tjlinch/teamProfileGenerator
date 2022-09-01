const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        // Positive test
        it('should create an object containing "name", "id", and "email" properties set to the arguments provided when called with the "new" keyword.', () => {
            //Arrange
            const name = 'Tyler';
            const id = '01';
            const email = 'tyler@email.com';

            // Act
            const obj = new Employee(name, id, email);

            // Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });

        // Exception test
        it('should throw an error if not provided a value for any of the properties', () => {
            //Arrange
            const cb = () => new Employee();
            const err = new Error(
                'Expected parameters "name", "id", and "email" to be non empty strings'
            );

            //Assert
            expect(cb).toThrowError(err);
        });
    });

    describe('getName', () => {
        it('should get the employee name', () => {
            const name = 'Tyler';
            const id = '47';
            const email = 'tyler@email.com';
            
            const obj = new Employee(name, id, email);

            expect(obj.getName()).toEqual(name);
        });
    });

    describe('getId', () => {
        it('should get the employee id', () => {
            const name = 'Tyler';
            const id = '47';
            const email = 'tyler@email.com';
            
            const obj = new Employee(name, id, email);

            expect(obj.getId()).toEqual(id);
        });
    });

    describe('getEmail', () => {
        it('should get the employee email', () => {
            const name = 'Tyler';
            const id = '47';
            const email = 'tyler@email.com';
            
            const obj = new Employee(name, id, email);

            expect(obj.getEmail()).toEqual(email);
        });
    });

    describe('getRole', () => {
        it('should return the employees role of "Employee"', () => {
            const name = 'Tyler';
            const id = '47';
            const email = 'tyler@email.com';
            
            const obj = new Employee(name, id, email);

            expect(obj.getRole()).toEqual('Employee');
        });
    });
});