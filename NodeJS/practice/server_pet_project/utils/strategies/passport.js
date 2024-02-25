const { KoaPassport } = require('koa-passport');
const passport = new KoaPassport();

const localStrategy = require('./local');
const githubStrategy = require('./github');

passport.use(localStrategy);
passport.use(githubStrategy);

module.exports = passport;
