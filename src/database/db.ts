import { MongoClient, Db } from 'mongodb';
import url from 'url';


let cachedDb : Db = null;

export async function connectDatabase(){
    if(cachedDb){
        return cachedDb;
    }

    const client = await MongoClient.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const dbName = url.pathToFileURL(process.env.MONGODB_URI).pathname.substr(1);

    const db = client.db(dbName);

    cachedDb = db;

    return db;
}