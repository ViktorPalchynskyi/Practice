const { KoaPassport } = require('koa-passport');
const localStrategy = require('./local');

const passport = new KoaPassport();

passport.use(localStrategy);

module.exports = passport;