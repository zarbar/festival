const express = require('express');
const authRoutes = require('./routes/auth-routes.js')
const app = express('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const testRoutes = require('./routes/test-routes');
const profileRoutes = require('./routes/profile-routes');
const cookieSession = require('cookie-session');
const passport = require('passport');

//setup view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}, () => {
    console.log('connected to MongoDB')
}).catch(error => handleError(error));


//setup routes
app.use('/auth', authRoutes)

//test routes
app.use('/test', testRoutes)

app.use('/profile', profileRoutes)

//create home route
app.get('/', (req, res) => {
    res.send('home screen')
})


app.listen(3002, () => {
    console.log('listening on port 3002')
})
