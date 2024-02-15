const User = require('@database/v1/user');
const { getTestingTools } = require('@utils/helpers');
const { expect } = getTestingTools();

describe('Testing User model', () => {
    it('must have name field', () => {
        const shema = User.schema.obj;
        const { type, required } = shema.name;

        expect(shema, 'model have name filed').to.have.property('name');
        expect(type, 'name field must be a string').to.eql(String);
        expect(required, 'name field must be required').to.be.true;
    });

    it('must have surname field', () => {
        const shema = User.schema.obj;
        const { type, required } = shema.surname;

        expect(shema, 'model have surname filed').to.have.property('name');
        expect(type, 'surname field must be a string').to.eql(String);
        expect(required, 'surname field must be required').to.be.true;
    });

    it('must have email field', () => {
        const shema = User.schema.obj;
        const { type, required, unique, validate } = shema.email;

        expect(shema, 'model have email filed').to.have.property('name');
        expect(type, 'email field must be a string').to.eql(String);
        expect(required, 'email field must be required with text: "Email should not be empty."').to.eql('Email should not be empty.');
        expect(unique, 'email field must be unique with text: "Email allready exist."').to.eql('Email allready exist.');
        expect(validate[0].validator, 'email field validator must be a function').to.be.a('function');
        expect(validate[0].message, 'email field validator mast have a message: "Invalid email."').to.eql('Invalid email.');
    });

    it('must have password field', () => {
        const shema = User.schema.obj;
        const { type } = shema.name;

        expect(shema, 'model have password filed').to.have.property('name');
        expect(type, 'password field must be a string').to.eql(String);
    });

    it('must have salt field', () => {
        const shema = User.schema.obj;
        const { type } = shema.name;

        expect(shema, 'model have salt filed').to.have.property('name');
        expect(type, 'salt field must be a string').to.eql(String);
    });
});
