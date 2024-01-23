const User = require('../models/userModel');

const getAllUsers = async (ctx) => {
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
};

const authUser = async (ctx) => {
    const users = await User.findOne({});

    if (!allUsers.length) {
        ctx.body = { users: [] };
    }

    ctx.body = { users };
};

const createUser = async (ctx) => {
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
            password,
        });

        ctx.body = { user };
    } catch (error) {
        console.error('createUser error:', error);
        ctx.throw(500, 'Internal server error.');
    }
};

module.exports = {
    getAllUsers,
    createUser,
};