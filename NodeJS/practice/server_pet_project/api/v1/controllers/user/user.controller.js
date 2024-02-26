const { User } = require('@database/v1');
const passport = require('@utils/strategies');
const Logging = require('@utils/logging');
const logger = Logging.getInstance().registerLogger(`api:v1:controllers:user:${require('node:path').basename(__filename)}`);

async function getAllUsers(ctx) {
    try {
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
        const authResult = await new Promise((resolve, reject) => {
            passport.authenticate('local', async (err, user, info) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ user, info });
                }
            })(ctx, next);
        });

        if (!authResult.user) {
            ctx.status = 400;
            ctx.body = { error: authResult.info.message };
            return;
        }
        
        const token = await ctx.login(authResult.user);

        ctx.body = { token };
    } catch (error) {
        logger.error('login - caught exception: [%s]', error);
        throw error;
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
        const token = await ctx.login(user);

        ctx.body = { token };
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

async function me(ctx) {
    if (!ctx.user) {
        ctx.status = 403;
        ctx.body = { error: 'No user authenicated.' };
        return;
    }

    ctx.body = {
        email: ctx.user.email,
        name: ctx.user.name,
        surname: ctx.user.surname,
    };
}

module.exports = {
    getAllUsers,
    createUser,
    login,
    countSurnames,
    me,
};
