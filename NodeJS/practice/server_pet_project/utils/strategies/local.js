const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/userModel');

module.exports = new LocalStrategy(
    { usernameField: 'email', session: false },
    async (email, password, done) => {
        const user = await User.findOne({ email });

        if (!user) {
            return done(null, false, 'User is not authenticated.');
        }


        const passportHash = await user.checkPassword(password);
        console.log('LocalStrategy', { user, email, password, passportHash });
        if (!passportHash) {
            return done(null, false, 'Incorrect password.');
        }

        return done(false, user, 'User')
    }
)