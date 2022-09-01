const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create an object containing the "officeNumber" property, as well as the properties inherited from the Employee class', () => {
            const officeNumber = '1';

            const obj = new Manager('Tyler', '47', 'tyler@email.com', officeNumber);

            expect(obj.officeNumber).toEqual(officeNumber);
        });

        it('should throw an error if not provided a value for the "officeNumber" property', () => {
            const cb = () => new Manager();
            const err = new Error(
                'Expected parameter "officeNumber" to be a non empty string'
            );

            expect(cb).toThrowError(err);
        });
    });

    describe('getRole', () => {
        it('should return the managers role of "Manager"', () => {
            const obj = new Manager ('Tyler', '01', 'tyler@email.com', '1');

            expect(obj.getRole()).toEqual('Manager');
        });
    });
});