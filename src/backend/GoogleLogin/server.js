const express = require('express');
const authRoutes = require('./routes/auth-routes.js')
const app = express('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const testRoutes = require('./routes/test-routes');

//setup view engine
app.set('view engine', 'ejs');

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, {
    useNewUrlParser: true
}, () => {
    console.log('connected to MongoDB')
}).catch(error => handleError(error));


//setup routes
app.use('/auth', authRoutes)

//test routes
app.use('/test', testRoutes)

//create home route
app.get('/', (req, res) => {
    res.send('home screen')
})


app.listen(3002, () => {
    console.log('listening on port 3002')
})
