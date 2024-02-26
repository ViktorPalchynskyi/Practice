const { User } = require('@database/v1');
const Logging = require('@utils/logging');
const logger = Logging
    .getInstance()
    .registerLogger(`utils:strategies:${require('node:path').basename(__filename)}`);

module.exports = async function authenticate(email, displayName, done) {
    if (!email) {
        return done(null, false, 'No email provided.');
    }

    try {
        const [name, surname] = displayName.split(' ');
        const user = await User.findOne({ email, name, surname });
        
        if (!user) {
            const newUser = await User.create({ email, name, surname });
            return done(null, newUser, 'New user created.');
        }

        return done(null, user, 'User record.');
    } catch (error) {
        logger.error('authenticate error - caught exception: %s', error);
    }
};
