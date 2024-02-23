const { v4: uuid } = require('uuid');
const User = require('@database/v1/user');
const passport = require('@utils/strategies');
const Logging = require('@utils/logging');
const logger = Logging.getInstance().registerLogger(`api:v1:controllers:user:${require('node:path').basename(__filename)}`);

async function getAllUsers(ctx) {
    try {
        // logger.info('getAllUsers ctx - referer: [%s]', ctx.headers.referer);
        // logger.info('getAllUsers ctx - query: [%s]', ctx.query);
        const users = await User.find({});

        if (!users.length) {
            ctx.body = { users: [] };
        }

        ctx.body = { users };
    } catch (error) {
        logger.error('getAllUsers - caught exception: [%s]', error);
    }
}

// TODO: rename this function
async function login(ctx, next) {
    try {
        await passport.authenticate('local', async (err, user, info) => {
            if (err) throw err;

            if (!user) {
                ctx.status = 400;
                ctx.body = { error: info.message };
                return;
            }

            const token = uuid();

            ctx.body = { token };
        })(ctx, next);
    } catch (error) {
        logger.error('login - caught exception: [%s]', error);
    }
}

async function createUser(ctx) {
    const { name, surname, email, password } = ctx.request.body;

    if (!name || !surname || !email || !password) {
        ctx.throw(400, 'Invalid credentials.');
    }

    try {
        const user = await User.create({
            name,
            surname,
            email,
        });

        await user.setPassword(password);
        await user.save();

        ctx.body = { user };
    } catch (error) {
        logger.error('createUser - caught exception: [%s]', error);
        throw error;
    }
}

async function countSurnames(ctx) {
    try {
        const users = await User.aggregate([{ $group: { _id: '$surname', total: { $sum: 1 } } }]);

        if (!users.length) {
            ctx.body = { users: [] };
        }

        ctx.body = { users };
    } catch (error) {
        logger.error('countSurnames - caught exception: [%s]', error);
    }
}

module.exports = {
    getAllUsers,
    createUser,
    login,
    countSurnames,
};
