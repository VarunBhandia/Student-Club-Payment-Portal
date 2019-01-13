const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

var Razorpay = require('razorpay');
var instance = new Razorpay({
  key_id: 'rzp_test_yY6hENsbfg4E62',
  key_secret: 'o0mh3HQO4l4o58BQboWGmQUv'
})




// ... other imports 
const path = require("path");


var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://<dbuser>:<dbpassword>@ds153314.mlab.com:53314/heroku_zt5h9gdm';

MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  if(err)
  {
      console.log(err);
  }
  var dbo = db.db('heroku_zt5h9gdm');
  dbo.createCollection("BookingHistory", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  }); 
  db.close();
}); 

const app = express();

// Handlebars Middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// ... other app.use middleware 
 //app.use(express.static(path.join(__dirname, "client", "build")));

// Index Route
var amount= 1000,
    currency='INR',
    receipt = '1234545f4',
    payment_capture =true,
    notes ="something",
    order_id,payment_id,table_id;
var tag = 0;

app.post('/', function (req, res) {
  table_id = req.body.keeptime;
  console.log(table_id);
});


function BookingCheck() {
  
}



app.get('/', (req, res) => {
    var tag = 0;
    instance.orders.create({amount, currency, receipt, payment_capture, notes}).then((response) => {
    console.log("**********Order Created***********");
    console.log(response);
    console.log("Table to be booked is : " + table_id);
    console.log("**********Order Created***********");
    order_id=response.id;
    BookingCheck();
    }).catch((error) => {
      console.log(error);
})
// instance.payments.capture(order_id, amount).then((response) => {
//     console.log(response);
// }).catch((error) => {
//   console.log(error);
// });
  res.render(
    'index',
    {order_id:order_id,amount:amount, table_id:table_id}
  );
});

var resp = {};
var tid = [];
/*****************
 * Payment status*
 *****************/
app.post('/purchase', (req,res) =>{
    payment_id =  req.body;
    console.log("**********Payment authorized***********");
    console.log(payment_id);
    console.log("**********Payment authorized***********");
    console.log(table_id);
    instance.payments.fetch(payment_id.razorpay_payment_id).then((response) => {
    console.log("**********Payment instance***********");
    console.log(response); 
    resp = response;
    resp.table_id = table_id;
    var t = table_id.slice(0,11);
    var ta = table_id.slice(12);
    tid.push({time: t, table: ta});
    
    console.log("**********Payment instance***********")
    MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
      var dbo = db.db('heroku_zt5h9gdm');
      var insertobj = { BookingEmail: resp.email,
        BookingContact: resp.contact,
        BookingId: resp.id,
        TableId : resp.table_id,
      };
      dbo.collection("BookingHistory").insertOne(insertobj, function(err, res) {
        if (err) throw err;
        console.log("Table time and id: " + insertobj.TableId + " has been booked by : " + insertobj.BookingEmail );
      });
      db.close();
    }); 
    instance.payments.capture(payment_id.razorpay_payment_id, response.amount).then((response) => {
    res.send(response);
  }).catch((error) => {
  console.log(error);
});
}).catch((error) => {
  console.log(error);
});

})


app.get('/purchase', function (req, res) {
  console.log(tid);
  res.send(tid);
});


app.get('/dbstatus', function (req, res) {
  tid = [];
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_zt5h9gdm");
    dbo.collection("BookingHistory").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
});

function DeleteRecords() {
  MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_zt5h9gdm");
    var myquery = {};
    dbo.collection("BookingHistory").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
      db.close();
    });
  });
}

app.get('/dbreset', function (req, res) {
  DeleteRecords();
});


const port = process.env.PORT || 4000;

const server = http.createServer(app)
server.listen(port)
server.on('listening', () => console.log('Express server is up and running!'))
// Right before your app.listen(), add this:
/*app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
}); */ 

// app.listen(process.env.PORT || port, function() {
//   console.log('Express server is up and running!');
// });
