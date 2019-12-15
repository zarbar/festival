const express = require('express');
const app = express('./routes/auth-routes');
const db = require('./dbconnect');
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

db.connect().then(dbo => {
    app.post('/checkuser', (req, res) => {
        dbo.collection('festipalusers').findOne({ googleId: req.body.googleId })
            .then((currentUser) => {
                if (currentUser) {
                    console.log('user is: ', currentUser);
                } else {
                    let newUser = { username: req.body.username, googleId: req.body.googleId };
                    dbo.collection('festipalusers').insertOne(newUser, function (err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");
                    })
                }
            }
            )
    }
    )
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
