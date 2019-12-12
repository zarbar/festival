const express = require('express');
const authRoutes = require('./routes/auth-routes.js')
const app = express('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const testRoutes = require('./routes/test-routes');
const dashboardRoutes = require('./routes/dashboard-routes');
const cookieSession = require('cookie-session');
const passport = require('passport');
const db = require('../dbconnect');
const port = process.env.PORT || 3002;

db.connect().then(dbo => {
    app.get('/DbData', (req, res) => {
        dbo.collection('festipalusers').find({}).toArray((err, data) => {
            console.log('connected to db')
            if (err) throw err;
            res.send(data);
        })
    })
})

//setup view engine
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

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
app.use('/auth', authRoutes);

//test routes
app.use('/test', testRoutes);

app.use('/dashboard', (req, res) => {
    res.send('this is your dashboard' + req.body)
});

//create home route
app.get('/', (req, res) => {
    res.send('home screen')
})

app.use('/testy', (req, res) => {
    console.log('log me please!')
})

app.get('/dashboard', (req, res) => {
    res.send('this is your dashboard' + req.body)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
