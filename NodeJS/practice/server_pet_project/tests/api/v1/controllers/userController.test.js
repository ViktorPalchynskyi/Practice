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
        it('must return an empty list', async () => {
            const res = await request({
                method: 'get',
                url: '/users/all',
            });
            const { users } = res.data;

            expect(users).to.have.lengthOf(0);
        });

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
    });

    describe('Testing createUser function', () => {
        it('must return a valid document', async () => {
            const userData = {
                email: 'user@mail.com',
                name: 'User',
                surname: 'User',
                password: '123123123',
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

        it('must return an error if user data isn`t provided', async () => {
            const userData = {
                email: 'user@mail.com',
                name: 'User',
                surname: 'User',
                password: '123123123',
            };

            for (let n = 0; n < Object.keys(userData).length; n++) {
                const truncatedUserData = {
                    email: n === 0 ? '' : userData.email,
                    name: n === 1 ? '' : userData.name,
                    surname: n === 2 ? '' : userData.surname,
                    password: n === 3 ? '' : userData.password,
                };

                const res = await request({
                    method: 'post',
                    url: '/users/create',
                    data: truncatedUserData,
                });

                expect(res.status, 'response status 400').to.equal(400);
                expect(res.data, 'response contains error object').to.deep.equal({ error: 'Invalid credentials.' });
            }
        });
    });

    // TODO: rename this function
    describe('Testing login function', () => {
        it('must return a token', async () => {
            const userData = {
                email: 'userN@mail.com',
                name: 'User',
                surname: 'User',
            };

            const user = await User.create(userData);
            await user.setPassword('123123123');
            await user.save();

            const res = await request({
                method: 'post',
                url: '/users/login',
                data: {
                    email: user.email,
                    password: '123123123',
                },
            });
            const { token } = res.data;
            expect(token).to.be.a('string');
        });

        it('must return an error if missing credentials', async () => {
            const userData = {
                email: 'userN1@mail.com',
                name: 'User',
                surname: 'User',
            };

            const user = await User.create(userData);
            await user.setPassword('123123123');
            await user.save();

            for (let n = 0; n < 2; n++) {
                const res = await request({
                    method: 'post',
                    url: '/users/login',
                    data: {
                        email: n === 0 ? '' : user.email,
                        password: n === 1 ? '' : '123123123',
                    },
                });

                expect(res.status, 'response status 400').to.equal(400);
                expect(res.data, 'response contains error object').to.deep.equal({ error: 'Missing credentials' });
            }
        });
    });
});
