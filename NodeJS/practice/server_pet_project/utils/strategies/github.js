const GithubStrategy = require('passport-github').Strategy;
const { config } = require('@config');
const authenticate = require('./authenicate');

module.exports = new GithubStrategy(
    {
        clientID: config.providers.github.appId,
        clientSecret: config.providers.github.appSecret,
        callbackURL: config.providers.github.callbackURI,
        scope: ['user:email'],
        session: false,
    },
    (accessToken, refreshToken, profile, done) => {
        authenticate(profile.emails[0].value, profile.displayName, done);
    }
);
