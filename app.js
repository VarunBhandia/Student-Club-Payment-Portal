const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
require('dotenv').config();
var Razorpay = require('razorpay');
var instance = new Razorpay({
  key_id: process.env.API_KEY,
  key_secret: process.env.API_PASS
})



// ... other imports 
const path = require("path");


var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/heroku_zt5h9gdm';
console.log(process.env.MONGOLAB_URI);

// first connection to the database
MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  if(err)
  {
      console.log(err);
  }
  
  var dbo = db.db(process.env.DB_NAME);
  dbo.createCollection("BookingHistory", function(err, res) {
    if (err) throw err;
    console.log("Booking History Collection created!");
  });
  dbo.createCollection("TableStatus", function(err, res) {
    if (err) throw err;
    console.log("Table Status Collection created!");
  });
}); 

const app = express();

//Handlebars Middleware


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Index Route
var amount= 1000,
    currency='INR',
    receipt = '1234545f4',
    payment_capture =true,
    notes ="something",
    order_id,payment_id,table_id = '', count = 0, bookno = true;
var tag = 0;

app.post('/', function (req, res) {
  table_id = req.body.item.keeptime;
  amount = req.body.amount*100;
});

app.use('/handlebars', (req, res) => {
  CheckBooking(count);
  setTimeout(function() {
    if(count === 1) {
      count = 0;
      res.redirect('/');
    }
    else if(table_id === ''){
      res.redirect('/');
    }
    
    else {
      var tag = 0;
      instance.orders.create({amount, currency, receipt, payment_capture, notes}).then((response) => {
      console.log("**********Order Created***********");
      console.log(response);
      console.log("Table to be booked is : " + table_id);
      console.log("**********Order Created***********");
      order_id=response.id;
      }).catch((error) => {
        console.log(error);
      })
        app.engine('handlebars',exphbs({defaultLayout:'main'}));
        app.set('view engine', 'handlebars');
        res.render(
          'index',
          {order_id,amount, table_id}
        );
    }
  }, 1000);
  
  

  

  
  // res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  // res.sendFile(path.join(__dirname, 'views/layouts', 'main.handlebars'))
});


// Set Static Folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/static/*.css', (req, res) => {
  req.url = 'client/build' + req.url;
  res.setHeader('Content-type', 'text/css')
  res.sendFile(path.join(__dirname, req.url))
});
app.get('/static/*.js', (req, res) => {
  
  req.url = 'client/build' + req.url;
  
  res.setHeader('Content-type', 'text/javascript')
  res.sendFile(path.join(__dirname, req.url))
});
app.get('/manifest.json', (req, res) => {
  req.url = 'client/build' + req.url;
  res.setHeader('Content-type', 'application/json')
  res.sendFile(path.join(__dirname, req.url))
});
 app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', (req, res) => {
    
// // instance.payments.capture(order_id, amount).then((response) => {
// //     console.log(response);
// // }).catch((error) => {
// //   console.log(error);
// // });
//   res.render(
//     'index',
//     {order_id:order_id,amount:amount, table_id:table_id}
//   );
// });


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
    // checking for 3 or more bookings 
    CheckContactInfo(response);
    setTimeout(function() {
      if(bookno === false) {
        bookno = true;
       res.render('notif');
      } 
      else {
        response.table_id = table_id;
        var TableTime = table_id.slice(0,11);
        var TableType = table_id.slice(12);
        response.tabletime = TableTime;
        response.tabletype = TableType;
        
        // pushing table_id and status to TABLE STATUS collection
        MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
          if(!err) {
            console.log("We are connected");
          }
          if(err)
          {
              console.log(err);
          }
          
          var dbo = db.db(process.env.DB_NAME);
          var insertobj = { TableTime : TableTime,
            TableType : TableType,
            TableStatus : 'Booked'
          };
          dbo.collection("TableStatus").insertOne(insertobj, function(err, res) {
            if (err) throw err;
            console.log("Table time is " + insertobj.TableTime +  "     "  + insertobj.TableType + " has been booked" );
          });
        }); 
    
        console.log("**********Payment instance***********")
      
        // pushing payment details to BookingHistory
        MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
          if(!err) {
            console.log("We are connected");
          }
          if(err)
          {
              console.log(err);
          }
          
          var dbo = db.db(process.env.DB_NAME);
          var insertobj = { BookingEmail: response.email,
            BookingContact: response.contact,
            BookingId: response.id,
            TableId : response.table_id,
          };
          dbo.collection("BookingHistory").insertOne(insertobj, function(err, res) {
            if (err) throw err;
            console.log("Table time and id: " + insertobj.TableId + " has been booked by : " + insertobj.BookingEmail );
          });
        }); 
        
    
        app.engine('handlebars',exphbs({defaultLayout:'main'}));
        app.set('view engine', 'handlebars');
    
        res.render(
          'purchase',
          {response}
        );
      }
    }, 1000);
    
  
}).catch((error) => {
  console.log(error);
});

})


app.get('/purchase', function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    dbo.collection("TableStatus").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
      db.close();
    });
  });
});




function DeleteTableStatus() {
  MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    var myquery = {};
    dbo.collection("TableStatus").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
    });
  });
}


function DeleteBookingHistory() {
  MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    var myquery = {};
    dbo.collection("BookingHistory").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
    });
  });
}



function CheckBooking() {
  var TableTime = table_id.slice(0,11);
  var TableType = table_id.slice(12);
  
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    var query = {TableTime : TableTime, TableType : TableType, TableStatus : 'Booked'};  
    dbo.collection("TableStatus").find(query).toArray(function(err, result) {
      if (err) throw err;
      result = JSON.stringify(result); 
      if(result[1] != ']') {
        count = 1;
      }
      else {
        count = 0;
      }
    });
  });
}

function CheckContactInfo(response) {  
  console.log("HEYEYEY" + response);
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    var query = {BookingContact: response.contact};  
    dbo.collection("BookingHistory").find(query).toArray(function(err, result) {
      if (err) throw err;
      
      if(result.length >= 3) {
        bookno = false;
      }
      else {
        bookno = true;
      }
    });
  });
}

setInterval(function(){
  DeleteBookingHistory();
  DeleteTableStatus();

},86400000);
const port = process.env.PORT || 4000;


// Right before your app.listen(), add this:
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "main.handlebars"));
// }); 

app.listen(process.env.PORT || port, function() {
  console.log('Express server is up and running!');
});
