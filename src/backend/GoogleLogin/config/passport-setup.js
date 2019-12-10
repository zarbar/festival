const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../../models/userModel');



passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
    }, (accessToken, refreshToken, profile, done) => {
        console.log('profile.displayName: ', profile.displayName, 'profile.id: ', profile.id);
        new User({
            username: profile.displayName,
            googleId: profile.id
        }).save().then((newUser) => {
            console.log('new User Created in database');
        })
    }))



    // console.log('google login connected, profile: ', JSON.stringify(profile.id), JSON.stringify(profile.displayName));

        // User.findOne({ googleId: profile.id }).then((currentUser) => {
        //     console.log('google profile found');
        //     if (currentUser) {
        //         //already have user
        //         console.log('user is' + currentUser)
        //     } else {
        //if not, create new user in db