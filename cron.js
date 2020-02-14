import { MongoClient } from 'mongodb';

var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/heroku_zt5h9gdm';

MongoClient.connect(url, { useNewUrlParser: true}, (err, db) => { 
    if(err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    dbo.collection("TableStatus").deleteMany({});
    dbo.collection("OrderTableStatus").deleteMany({});
    console.log("Database values cleared");
})
