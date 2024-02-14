const app = require('@app');
const { connctDB, disconnectDB } = require('@config');
const { getTestingTools, mapUserDocument } = require('@utils/helpers');
const User = require('@database/v1/user');
const { expect, request } = getTestingTools();

describe('Testing userController.js', () => {
    let server;

    before((done) => {
        server = app.listen(3000, done);
        connctDB();
    });

    after(async () => {
        await User.deleteMany({});
        await disconnectDB();
        server.close();
    });

    describe('Testing getAllUsers function', () => {
        it('must return a user list', async () => {
            const startedUserArr = [];
            for (let n = 0; n < 3; n++) {
                const userData = {
                    email: `user${n}@mail.com`,
                    name: `User ${n}`,
                    surname: `User ${n}`,
                };

                const user = await User.create(userData);
                await user.setPassword('123123123');
                await user.save();
                startedUserArr.push(user);
            }

            const res = await request({
                method: 'get',
                url: '/users/all',
            });
            const { users } = res.data;
            const mappedStartedUsers = startedUserArr.map(mapUserDocument);
            const mappedResponseUsers = users.map(mapUserDocument);

            for (let n = 0; n < mappedStartedUsers.length; n++) {
                expect(mappedResponseUsers[n], `document ${n + 1} is equal to started document`).to.deep.equal(mappedStartedUsers[n]);
            }
        });

        it('Testing createUser function', async () => {
            const userData = {
                email: 'user@mail.com',
                name: 'User',
                surname: 'User',
                password: '123123123'
            };
            const res = await request({
                method: 'post',
                url: '/users/create',
                data: userData,
            });
            const { user } = res.data;
            const mappedUser = mapUserDocument(user);

            expect(mappedUser, 'must have id field').to.have.property('id');
            expect(mappedUser, 'must have name field').to.have.property('name');
            expect(mappedUser, 'must have surname field').to.have.property('surname');
            expect(mappedUser, 'must have email field').to.have.property('email');
            expect(mappedUser, 'must have salt field').to.have.property('salt');
            expect(mappedUser, 'must have password field').to.have.property('password');

            expect(mappedUser.id, 'id field must be type of String').to.be.a('string');
            expect(mappedUser.name, 'name field must be type of String').to.be.a('string');
            expect(mappedUser.surname, 'surname field must be type of String').to.be.a('string');
            expect(mappedUser.email, 'email field must be type of String').to.be.a('string');
            expect(mappedUser.salt, 'salt field must be type of String').to.be.a('string');
            expect(mappedUser.password, 'password field must be type of String').to.be.a('string');
        });
    });
});
