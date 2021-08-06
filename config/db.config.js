const mongodb = require('mongodb');
const env = require('./envConfig')

const MongoClient = mongodb.MongoClient;
const conxnUrl = env.dbconxnUrl;
const dbName = 'bookFinder';
module.exports = {
    conxnUrl,
    dbName,
    MongoClient,
    oid: mongodb.ObjectID
}