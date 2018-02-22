const helpers = require('../../middlewares/sequelize-options');

describe('Sequelize Options', () => {
    test('should return a object removing reserved vars', () => {
        console.log(helpers);
        const query = {
            firstName: 'Luiz',
            fields: 'name,age',
            populate: 'company',
        };

        expect(helpers.removeReservedVars(query)).toEqual({
            firstName: 'Luiz',
        });
    });

    test('should return an array splited by comma', () => {
        expect(helpers.getFieldAsArray('name,age')).toEqual(['name','age']);
    });
});
