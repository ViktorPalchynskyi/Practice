const User = require('../models/userModel');

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

async function authUser (ctx) {
    const users = await User.findOne({});

    if (!allUsers.length) {
        ctx.body = { users: [] };
    }

    ctx.body = { users };
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
};