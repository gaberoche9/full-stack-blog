import { MongoClient } from 'mongodb';

const dbServer = 'mongodb://127.0.0.1:27017'
const dbName = 'react-blog-db';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(dbServer);
    await client.connect();
    db = client.db(dbName);
    cb();
}

export {
    db,
    connectToDb,
};