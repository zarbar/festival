const express = require('express');
const app = express('./routes/auth-routes');
const db = require('./dbconnect');
const port = process.env.PORT || 3002;
const path = require('path');

app.use(express.static(path.join(__dirname, '../../build')));

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
                    let newUser = {
                        username: req.body.username, googleId: req.body.googleId,
                        festivalInfo: {}
                    };
                    dbo.collection('festipalusers').insertOne(newUser, function (err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");
                    })
                }
            })
    })
});

// db.connect().then(dbo => {
//     app.post('/saveFormData', (req, res) => {
//         let findDoc = { googleId: req.body.googleId };
//         let newData = { $set: { festivalInfo: { basicFormData: req.body.festivalData } } };
//         dbo.collection('festipalusers').updateOne(findDoc, newData, function (err, res) {
//             if (err) throw err;
//             console.log("document updated");
//         })
//     })
// })


db.connect().then(dbo => {
    app.get('/userData', (req, res) => {
        dbo.collection('festipalusers').findOne({ googleId: req.body.googleId })
            .then(user => res.send(user.username))
    })
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
