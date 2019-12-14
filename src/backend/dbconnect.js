const keys = require('./keys');

const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const url = keys.mongodb.dbURI;
const dbName = url.substr(url.lastIndexOf('/') + 1)
module.exports = { connect };
function connect() {
    return new Promise((resolve) => {
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mongoDB) {
            if (err) throw err;
            const dbo = mongoDB.db(dbName);
            resolve(dbo);
        });
    });
}