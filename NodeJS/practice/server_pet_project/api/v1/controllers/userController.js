const { v4: uuid } = require('uuid');
const User = require('../models/userModel');
const passport = require('../../../utils/passport');

async function getAllUsers(ctx) {
    try {
        const users = await User.find({});

        if (!users.length) {
            ctx.body = { users: [] };
        }

        ctx.body = { users };
    } catch (error) {
        console.error('getAllUsers error:', error);
        ctx.throw(500, 'Internal server error.');
    }  
}

async function login (ctx, next) {
    await passport.authenticate('local', async (err, user, info) => {

        if (err) throw err;
        
        if (!user) {
            ctx.status = 400;
            ctx.body = { error: info };
            return;
        }

        const token = uuid();

        ctx.body = { token };
    })(ctx, next);
}

async function createUser(ctx) {
    console.log();
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
        console.error('createUser error:', error);
        ctx.throw(500, 'Internal server error.');
    }
}

module.exports = {
    getAllUsers,
    createUser,
    login,
};