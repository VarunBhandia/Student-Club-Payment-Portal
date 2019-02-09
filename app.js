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
  dbo.createCollection("OrderTableStatus", function(err, res) {
    if (err) throw err;
    console.log("OrderTable Status Collection created!");
  });
  dbo.createCollection("FoosballLS", function(err, res) {
    if (err) throw err;
    console.log("FoosballLS Collection created!");
  });
  dbo.createCollection("ChessLS", function(err, res) {
    if (err) throw err;
    console.log("ChessLS Collection created!");
  });
  dbo.createCollection("CarromLS", function(err, res) {
    if (err) throw err;
    console.log("CarromLS Collection created!");
  });
  dbo.createCollection("PoolLS", function(err, res) {
    if (err) throw err;
    console.log("PoolLS Collection created!");
  });
  dbo.createCollection("SnookerLS", function(err, res) {
    if (err) throw err;
    console.log("SnookerLS Collection created!");
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
    order_id,payment_id, count = 1, bookno = true,
    table_id = [],
    ongoing = false;



app.post('/admin', function (req, res) {
  res.send(JSON.stringify('iamadmin'));
});

app.post('/adminbook', function (req, res) {
  console.log('hi');
  table_id = req.body.item.keeptime;
  amount = req.body.amount*100;
        var TableTime = table_id.slice(0,11);
        var TableType = table_id.slice(12);
        
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
});

  

  

  
  // res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  // res.sendFile(path.join(__dirname, 'views/layouts', 'main.handlebars'))



// Set Static Folder
app.use(express.static(path.join(__dirname, 'sc')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'sc', 'index.htm'))
});
app.use(express.static(path.join(__dirname, 'public')));
app.get('/portal', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/psstatus', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});

app.get('/psbooking', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/tablestatus', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
// static folders for admin pages
app.get('/lsfoosball', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/foosballstream', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/lscarrom', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/carromstream', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/lschess', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/chessstream', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/lspool', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/poolstream', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/lssnooker', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/snookerstream', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});

app.get('/static/*.css', (req, res) => {
  req.url = 'client/build/' + req.url;
  res.setHeader('Content-type', 'text/css')
  res.sendFile(path.join(__dirname, req.url))
});
app.get('/static/*.js', (req, res) => {
  
  req.url = 'client/build' + req.url;
  
  res.setHeader('Content-type', 'text/javascript')
  res.sendFile(path.join(__dirname, req.url))
});
app.get('/static/media/*.jpg', (req, res) => {
  
  req.url = 'client/build' + req.url;
  
  res.setHeader('Content-type', 'image/jpg')
  res.sendFile(path.join(__dirname, req.url))
});
app.get('/manifest.json', (req, res) => {
  req.url = 'client/build' + req.url;
  res.setHeader('Content-type', 'application/json')
  res.sendFile(path.join(__dirname, req.url))
});



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


app.post('/', function (req, res) {
    table_id = req.body.item.finalbook;
    amount = req.body.amount.totalamount*100;
    var TableTime = [];
        var TableType = [];
        for (var i=0; i < table_id.length; i++) {
            TableTime[i] = table_id[i].slice(0,11);
            TableType[i] = table_id[i].slice(12);
        } 
    MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
      if(!err) {
        console.log("We are connected");
      }
      if(err)
      {
          console.log(err);
      }
      for(var i=0; i < table_id.length; i++) {
      var dbo = db.db(process.env.DB_NAME);
      var insertobj = { TableTime : TableTime[i],
        TableType : TableType[i],
        TableStatus : 'Booked',
        TableFinalStatus: 'Ongoing'
      };
      dbo.collection("TableStatus").insertOne(insertobj, function(err, res) {
        if (err) throw err;
        console.log("Table time is " + insertobj.TableTime +  "     "  + insertobj.TableType + " has been booked" );
      });
    }
    });
    
          
});


app.use('/payment', (req, res) => {
  
    CheckBooking(count,table_id);
 
  setTimeout(function() {
    if(count === 0) {
      count = 1;
      res.redirect('/');
    }
    else if(table_id[0] === undefined){
      res.redirect('/');
    }
    else {
      instance.orders.create({amount, currency, receipt, payment_capture, notes}).then((response) => {
      console.log("**********Order Created***********");
      console.log(response);
      console.log("Table to be booked is : " + table_id);
      console.log("**********Order Created***********");
      order_id = response.id;
      res.render(
        'index',
        {order_id,amount, table_id}
      );
      MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
          if(!err) {
            console.log("We are connected");
          }
          if(err)
          {
              console.log(err);
          }
          
          var dbo = db.db(process.env.DB_NAME);
          var insertobj = { table_id: table_id,
            order_id : order_id
          };
          dbo.collection("OrderTableStatus").insertOne(insertobj, function(err, res) {
            if (err) throw err;
          });
        }); 
      }).catch((error) => {
        console.log(error);
      })
      app.engine('handlebars',exphbs({defaultLayout:'main'}));
      app.set('view engine', 'handlebars');
     
    }
  }, 1000);
  setInterval(function() {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var myquery = { TableFinalStatus: 'Ongoing' };
      var dbo = db.db(process.env.DB_NAME);
      dbo.collection("TableStatus").remove(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted hiii");
        db.close();
      });
    });
    table_id = [];
  },600000);
});

/*****************
 * Payment status*
 *****************/
app.post('/purchase', (req,res) =>{
  var tableid = []
    payment_id = req.body;
    console.log("**********Payment authorized***********");
    console.log(payment_id);
    console.log("**********Payment authorized***********");
    instance.payments.fetch(payment_id.razorpay_payment_id).then((response) => {
    console.log("**********Payment instance***********");
    
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db(process.env.DB_NAME);
      var query = {order_id: response.order_id};  
      dbo.collection("OrderTableStatus").find(query).toArray(function(err, result) {
        if (err) throw err;
        else {
            tableid = result[0].table_id;
        }
        
      });
    });
    // checking for 3 or more bookings
    setTimeout(function() {
      CheckContactInfo(response);
      CheckBooking(count,tableid);
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var myquery = { table_id: tableid };
        var dbo = db.db(process.env.DB_NAME);
        dbo.collection("OrderTableStatus").remove(myquery, function(err, obj) {
          if (err) throw err;
          console.log(obj.result.n + " document(s) deleted");
          db.close();
        });
      });
    }, 1000);
    
    
      
    setTimeout(function() {
      if(count === 0) {
        count = 0;
        app.engine('handlebars',exphbs({defaultLayout:'main'}));
        app.set('view engine', 'handlebars');
       res.render('notif', 
       {
         text: 'Sorry! In the meantime, someone else booked one of your tables. Please collect your refund from Students Club' 
       });
      }
      else if(bookno === false) {
        bookno = true;
        app.engine('handlebars',exphbs({defaultLayout:'main'}));
        app.set('view engine', 'handlebars');
       res.render('notif', 
       {
         text: 'Sorry! You have already made 3 bookings for today. Refund cannot be processed now since you were already notified the same!' 
       });
      }
      if(tableid===[]) {
        app.engine('handlebars',exphbs({defaultLayout:'main'}));
        app.set('view engine', 'handlebars');
        res.render('notif', 
       {
         text: 'Sorry! Something fishy happened. Please try again!' 
       });
      }
      else {
        response.table_id = tableid;
        
        var TableTime = [];
        var TableType = [];
        for (var i=0; i < table_id.length; i++) {
            TableTime[i] = response.table_id[i].slice(0,11);
            TableType[i] = response.table_id[i].slice(12);
        } 
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
            for(var i=0; i < table_id.length; i++) {
            var dbo = db.db(process.env.DB_NAME);
            var insertobj = { TableTime : response.tabletime[i],
              TableType : response.tabletype[i],
              TableStatus : 'Booked',
              TableFinalStatus: 'Purchased'
            };
            dbo.collection("TableStatus").insertOne(insertobj, function(err, res) {
              if (err) throw err;
              console.log("Table time is " + insertobj.TableTime +  "     "  + insertobj.TableType + " has been booked" );
            });
          }
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
            for(var i=0; i < table_id.length; i++) {
            var dbo = db.db(process.env.DB_NAME);
            var insertobj = { BookingEmail: response.email,
              BookingContact: response.contact,
              BookingId: response.id,
              TableId : response.table_id[i],
            };
            dbo.collection("BookingHistory").insertOne(insertobj, function(err, res) {
              if (err) throw err;
              console.log("Table time and id: " + insertobj.TableId + " has been booked by : " + insertobj.BookingEmail );
            });
          }
          }); 
      
    
        app.engine('handlebars',exphbs({defaultLayout:'main'}));
        app.set('view engine', 'handlebars');
    
        res.render(
          'purchase',
          {response}
        );
      }
    }, 3000);
    
  
}).catch((error) => {
  console.log(error);
});

})

// getting info from admin pages 
// foosball 
app.post('/lsfoosball', function (req, res) {
  var val = req.body.value;
  MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
    if(!err) {
      console.log("We are connected");
    }
    if(err)
    {
        console.log(err);
    }
    
    var dbo = db.db(process.env.DB_NAME);
    myquery = {};
    dbo.collection("FoosballLS").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
    });
    var insertobj = { Player1: val.player1,
      Player2: val.player2,
      Player3: val.player3,
      Player4: val.player4,
      Link: val.link
    };
    dbo.collection("FoosballLS").insertOne(insertobj, function(err, res) {
      if (err) throw err;
    });
  });
});


app.post('/foosballstream', function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    dbo.collection("FoosballLS").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
});



// carrom
app.post('/lscarrom', function (req, res) {
  var val = req.body.value;
  MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
    if(!err) {
      console.log("We are connected");
    }
    if(err)
    {
        console.log(err);
    }
    
    var dbo = db.db(process.env.DB_NAME);
    myquery = {};
    dbo.collection("CarromLS").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
    });
    var insertobj = { Player1: val.player1,
      Player2: val.player2,
      Player3: val.player3,
      Player4: val.player4,
      Link: val.link
    };
    dbo.collection("CarromLS").insertOne(insertobj, function(err, res) {
      if (err) throw err;
    });
  });
});


app.post('/carromstream', function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    dbo.collection("CarromLS").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
});


// chess streaming

app.post('/lschess', function (req, res) {
  var val = req.body.value;
  MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
    if(!err) {
      console.log("We are connected");
    }
    if(err)
    {
        console.log(err);
    }
    
    var dbo = db.db(process.env.DB_NAME);
    myquery = {};
    dbo.collection("ChessLS").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
    });
    var insertobj = { Player1: val.player1,
      Player2: val.player2,
      Link: val.link
    };
    dbo.collection("ChessLS").insertOne(insertobj, function(err, res) {
      if (err) throw err;
    });
  });
});


app.post('/chessstream', function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    dbo.collection("ChessLS").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
});


// pool live stream
app.post('/lspool', function (req, res) {
  var val = req.body.value;
  MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
    if(!err) {
      console.log("We are connected");
    }
    if(err)
    {
        console.log(err);
    }
    
    var dbo = db.db(process.env.DB_NAME);
    myquery = {};
    dbo.collection("PoolLS").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
    });
    var insertobj = { Player1: val.player1,
      Player2: val.player2,
      Player3: val.player3,
      Player4: val.player4,
      Link: val.link
    };
    dbo.collection("PoolLS").insertOne(insertobj, function(err, res) {
      if (err) throw err;
    });
  });
});


app.post('/poolstream', function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    dbo.collection("PoolLS").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
});

// snooker streaming
app.post('/lssnooker', function (req, res) {
  var val = req.body.value;
  MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
    if(!err) {
      console.log("We are connected");
    }
    if(err)
    {
        console.log(err);
    }
    
    var dbo = db.db(process.env.DB_NAME);
    myquery = {};
    dbo.collection("SnookerLS").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
    });
    var insertobj = { Player1: val.player1,
      Player2: val.player2,
      Player3: val.player3,
      Player4: val.player4,
      Link: val.link
    };
    dbo.collection("SnookerLS").insertOne(insertobj, function(err, res) {
      if (err) throw err;
    });
  });
});


app.post('/snookerstream', function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    dbo.collection("SnookerLS").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
});



// send booked tables 
app.get('/mznFag7kV7', function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    dbo.collection("TableStatus").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
});

app.get('/tstatus', function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    dbo.collection("TableStatus").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
    dbo.collection("BookingHistory").find({}).toArray(function(err, result) {
      if (err) throw err;
     console.log(result);
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

function DeleteOrderTableStatus() {
  MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    var myquery = {};
    dbo.collection("OrderTableStatus").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
    });
  });
}



function CheckBooking(count, table) {
  var TableTime = [];
  var TableType = [];
  var tag = 0;
  for (var i=0; i < table.length; i++) {
      TableTime[i] = table[i].slice(0,11);
      TableType[i] = table[i].slice(12);
  } 
  for(var i=0; i<table.length; i++) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db(process.env.DB_NAME);
      var query = {TableTime : TableTime[i], TableType : TableType[i], TableStatus : 'Booked'};  
      dbo.collection("TableStatus").find(query).toArray(function(err, result) {
        if (err) throw err;
        result = JSON.stringify(result); 
        if(result[1] != ']') {
          count = 1;
          tag = 1;
        }
        else {
          count = 0;
        }
      });
    });
  if(tag === 1) {
    break;
  }
  }
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



app.use('/XKTmYC3pOg', function (req, res) {
  DeleteTableStatus();
  DeleteBookingHistory();
  DeleteOrderTableStatus();
});

const port = process.env.PORT || 4000;


// Right before your app.listen(), add this:
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "main.handlebars"));
// }); 

app.listen(process.env.PORT || port, function() {
  console.log('Express server is up and running!');
});
