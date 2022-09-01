const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an object containing the "school" property, as well as the properties inherited from the Employee class', () => {
            const school = 'DU';

            const obj = new Intern('Tyler', '47', 'tyler@email.com', school);

            expect(obj.school).toEqual(school);
        });

        it('should throw an error if not provided a value for the "school" property', () => {
            const cb = () => new Intern();
            const err = new Error(
                'Expected parameter "school" to be a non empty string'
            );

            expect(cb).toThrowError(err);
        });
    });

    describe('getSchool', () => {
        it('should get the intern school', () => {
            const school = 'DU';

            const obj = new Intern ('Tyler', '47', 'tyler@email.com', school);
            
            expect(obj.getSchool()).toEqual(school);
        });
    });

    describe('getRole', () => {
        it('should return the interns role of "Intern"', () => {
            const obj = new Intern ('Tyler', '01', 'tyler@email.com', 'DU');

            expect(obj.getRole()).toEqual('Intern');
        });
    });
});