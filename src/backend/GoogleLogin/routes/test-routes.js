const router = require('express').Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://user1:tu8ze5dHWyL7gSKW@cluster0-fzpo8.mongodb.net/test";


//auth login
router.get('/one', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        console.log("Database connected");
        db.close();
    });

});

router.get('/two', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.createCollection("customers1", function (err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });
})




//     var MyModel = mongoose.model('Test', new Schema({ name: String }));
// // Will just hang until mongoose successfully connects
// MyModel.findOne(function (error, result) { console.log(error, result) });
// setTimeout(function () {
//     mongoose.connect('mongodb+srv://user1:tu8ze5dHWyL7gSKW@cluster0-fzpo8.mongodb.net/test?retryWrites=true&w=majority@cluster0-fzpo8.mongodb.net/test', { useNewUrlParser: true });
// }, 60000);  
// });


module.exports = router;