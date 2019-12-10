const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../../models/userModel');

//mongodb userID takes identifying info and sends to browser
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//deserialize takes id when browser sends cookie back - passes in user
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
});

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                // already have user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                //if not, create new user in db
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log('new User Created in database');
                    done(null, newUser);
                })
            }
        })
    }))
