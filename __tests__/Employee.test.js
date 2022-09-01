const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object containing "name", "id", and "email" properties set to the arguments provided when called with the "new" keyword.', () => {
            const name = 'Tyler';
            const id = 01;
            const email = 'tyler@email.com';

            const obj = new Employee(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });
        
        // it('should create an object containing an "id" property set to the "id" argument provided when called with the " when called with the "new" keyword.', () => {
        //     const obj = new Employee();

        //     expect('id' in obj).toEqual(true);
        // });

        // it('should return an object containing an "email" property when called with the "new" keyword.', () => {
        //     const obj = new Employee();

        //     expect('email' in obj).toEqual(true);
        // });
    });

    describe('getName', () => {
        it('should')
    })
})