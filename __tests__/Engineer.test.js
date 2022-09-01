const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an object containing the "github" property, as well as the properties inherited from the Employee class', () => {
            const github = 'tjlinch';

            const obj = new Engineer('Tyler', '47', 'tyler@email.com', github);

            expect(obj.github).toEqual(github);
        });

        it('should throw an error if not provided a value for the "github" property', () => {
            const cb = () => new Engineer();
            const err = new Error(
                'Expected parameter "github" to be a non empty string'
            );

            expect(cb).toThrowError(err);
        });
    });

    describe('getGithub', () => {
        it('should get the engineer github', () => {
            const github = 'tjlinch';

            const obj = new Engineer ('Tyler', '47', 'tyler@email.com', github);
            
            expect(obj.getGithub()).toEqual(github);
        });
    });

    describe('getRole', () => {
        it('should return the engineers role of "Engineer"', () => {
            const obj = new Engineer ('Tyler', '01', 'tyler@email.com', 'tjlinch');

            expect(obj.getRole()).toEqual('Engineer');
        });
    });
});