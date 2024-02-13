const app = require('@app');
const { connctDB } = require('@config');
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
                //   console.log('user', user);
                startedUserArr.push(user);
            }

            const res = await request({
                method: 'get',
                url: '/users/all',
            });
            const { users } = res.data;
            const mappedStartedUsers = startedUserArr.map(mapUserDocument);
            const mappedResponseUsers = users.map(mapUserDocument);

            // console.log(mappedResponseUsers, mappedStartedUsers);

            for (let n = 0; n < mappedStartedUsers.length; n++) {
                expect(mappedResponseUsers[n], `document ${n + 1} is equal to started document`).to.deep.equal(mappedStartedUsers[n]);
            }
        });
    });
});
