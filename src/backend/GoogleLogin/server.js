const express = require('express');
const authRoutes = require('./routes/auth-routes.js')
const app = express('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
// const testRoutes = require('./routes/test-routes');
// const dashboardRoutes = require('./routes/dashboard-routes');
// const cookieSession = require('cookie-session');
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

app.use(express.json());

// this works!(saturday 14th)
// app.post('/checkuser', (req, res) => {
//     console.log('/checkuser request receievd ' + JSON.stringify(req.body.googleId));
// })

db.connect().then(dbo => {
    app.post('/checkuser', (req, res) => {
        dbo.collection('festipalusers').findOne({googleId: req.body.googleId})
        .then((currentUser) => {
            if (currentUser) {
                console.log('user is: ', currentUser);
            } else {

                
                // new User({
                //                 username: profile.displayName,
                //                 googleId: profile.id
                //             }).save().then((newUser) => {
                //                 console.log('new User Created in database');
                //                 done(null, newUser);
                //             })
            }
        })
    })
})

// User.findOne({ googleId: profile.id }).then((currentUser) => {
//     if (currentUser) {
//         // already have user
//         console.log('user is: ', currentUser);
//         done(null, currentUser);
//     } else {
//         //if not, create new user in db
//         new User({
//             username: profile.displayName,
//             googleId: profile.id
//         }).save().then((newUser) => {
//             console.log('new User Created in database');
//             done(null, newUser);
//         })
//     }
// })


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
// });

// app.use(cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [keys.session.cookieKey]
// }));

//initialize passport
// app.use(passport.initialize());
// app.use(passport.session());

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}, () => {
    console.log('connected to MongoDB')
}).catch(error => handleError(error));


//setup routes
// app.use('/auth', authRoutes);

// //test routes
// app.use('/test', testRoutes);

app.use('/dashboard', (req, res) => {
    res.send('this is your dashboard' + req.body)
});

//create home route
// app.get('/', (req, res) => {
//     res.send('home screen')
// })


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
