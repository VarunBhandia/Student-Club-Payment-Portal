const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const secret = 'mysecretsshhh';
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const withAuth = require('./middleware');
var Insta = require('instamojo-nodejs');
Insta.setKeys('test_740ce91628198c7bee53da61912','test_34c3808f8fcc937059bed35a427' );
Insta.isSandboxMode(true);

require('dotenv').config();
var Razorpay = require('razorpay');
var instance = new Razorpay({
  key_id: process.env.API_KEY,
  key_secret: process.env.API_PASS
})

var data = new Insta.PaymentData();


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
app.use(cookieParser());

// Index Route
var amount= 1000,
    order_id,payment_id, count = 0, bookno = true,
    table_id = [];
    
// deleting ongoing tables every 30 minutes
    setInterval(function() {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var myquery = { TableFinalStatus: 'Ongoing' };
        var dbo = db.db(process.env.DB_NAME);
        dbo.collection("TableStatus").remove(myquery, function(err, obj) {
          if (err) throw err;
          console.log(obj.result.n + " Table Status document(s) deleted");
          db.close();
        });
      });
      table_id = [];
    },300000);
    
app.post('/admin', function (req, res) {
  const password = req.body.pass;
  if(password === 'iamadmin') {
    const payload = {password};
      const token = jwt.sign(payload, secret, {
        expiresIn: '1h'
      });
      res.cookie('token', token, { httpOnly: true }).sendStatus(200);
  }
  else {
    res.status(401)
        .json({
          error: 'Incorrect password'
        });
  }
});

app.post('/adminbook', function (req, res) {
  table_id = req.body.item.finalbook;
    amount = req.body.amount.totalamount*100;
    var TableTime = [];
        var TableType = [];
        for (var i=0; i < table_id.length; i++) {
            TableTime[i] = table_id[i].slice(0,11);
            TableType[i] = table_id[i].slice(12);
        } 
        
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
          var insertobj = { TableTime : TableTime[i],
            TableType : TableType[i],
            TableStatus : 'Booked',
            TableFinalStatus: 'Purchased'
          };
          dbo.collection("TableStatus").insertOne(insertobj, function(err, res) {
            if (err) throw err;
            console.log("Table time is " + insertobj.TableTime +  "     "  + insertobj.TableType + " has been booked" );
          });
        }
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
app.get('/admin2019', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/finaladmin', withAuth, function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});
app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
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
app.get('/bookinghistory', (req, res) => {
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
app.get('/static/media/*.png', (req, res) => {
  
  req.url = 'client/build' + req.url;
  
  res.setHeader('Content-type', 'image/png')
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
    amount = req.body.amount.totalamount;
    if(amount>=10) {
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
    }      
});


app.use('/payment', (req, res) => {
  var orderid = [];  
  CheckBooking(count,table_id);

  setTimeout(function() {
    if(amount < 10) {
      res.send('Please book more than 1 table slot');
    }
    else if(count === 1) {
      count = 0;
      console.log('hello');
      res.redirect('/');
    }
    else if(table_id[0] === undefined){
      res.redirect('/');
    }
    else {
        data.purpose = "Book : " + table_id;           
        data.amount = amount;             
        data.setRedirectUrl('http://stuc.iitr.ac.in/purchase/');
        Insta.createPayment(data, function(error,response) {
          if (error) {
            alert(error);
          } else {
            var redirect_link = [];
            console.log(response);
            response = JSON.parse(response);
            orderid = response['payment_request'].id;
            redirect_link = response['payment_request'].longurl;
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
                order_id : orderid 
              };
              dbo.collection("OrderTableStatus").insertOne(insertobj, function(err, res) {
                if (err) throw err;
              });
            });
            res.redirect(redirect_link);
          }
        });
        app.engine('handlebars',exphbs({defaultLayout:'main'}));
        app.set('view engine', 'handlebars');
      
    }
  }, 2000);
  
});

/*****************
 * Payment status*
 *****************/
app.get('/purchase', (req,res,value) =>{
  var tableid = []
    payment_id = req.query.payment_id;
    payment_status = req.query.payment_status;
    payment_request_id = req.query.payment_request_id;
    console.log("**********Payment authorized***********");
    console.log(payment_id);
    console.log("**********Payment authorized***********");
    if(payment_id === undefined || payment_status!='Credit'|| payment_request_id===undefined) {
      app.engine('handlebars',exphbs({defaultLayout:'main'}));
                app.set('view engine', 'handlebars');
                res.render('notif', 
                {
                  text: 'Sorry! Your booking could not be processed. Please try again'
                });
    }
    else {
      Insta.getPaymentDetails(payment_request_id, payment_id, function(error, response) {
        if (error) {
          alert(error);
        } else {
          console.log(response);
          console.log("**********Payment instance***********");
          MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db(process.env.DB_NAME);
            var query = {order_id: response['payment_request'].id};  
            dbo.collection("OrderTableStatus").find(query).toArray(function(err, result) {
              if (err){
                throw err;
              }
              else {
                if(result[0]===undefined) {
                  app.engine('handlebars',exphbs({defaultLayout:'main'}));
                  app.set('view engine', 'handlebars');
                  res.render('notif', 
                  {
                    text: 'You have already made this payment. Go to stuc.iitr.ac.in/portal to make more bookings'
                  });
                }
                else {
                  tableid = result[0].table_id;
                }
              }
            });
          });
          setTimeout(function() {
            if(tableid.length === 0) {
              console.log('Already booked');
            }
            else {
                // checking for 3 or more bookings
                  setTimeout(function() {
                    CheckContactInfo(response);
                    CheckBooking(count,tableid);
                    MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
                      if (err) throw err;
                      var myquery = { table_id: tableid };
                      var dbo = db.db(process.env.DB_NAME);
                      dbo.collection("OrderTableStatus").remove(myquery, function(err, obj) {
                        if (err) throw err;
                        console.log(obj.result.n + " Order Table document(s) deleted");
                        db.close();
                      });
                    });
                  }, 2000);
                  
                  
                    
                  setTimeout(function() {
                    if(count === 1) {
                      count = 0;
                      app.engine('handlebars',exphbs({defaultLayout:'main'}));
                      app.set('view engine', 'handlebars');
                    res.render('notif', 
                    {
                      text: 'Sorry! In the meantime, someone else booked one of your tables. Please collect your refund from Students Club. It might take some days.' 
                    });
                    }
                    else if(bookno === false) {
                      bookno = true;
                      app.engine('handlebars',exphbs({defaultLayout:'main'}));
                      app.set('view engine', 'handlebars');
                    res.render('notif', 
                    {
                      text: 'Sorry! You have already made 3 bookings for today. Refund will be processed later since you were already notified the same!' 
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
                          var insertobj = { BookingEmail: response['payment_request'].payment['buyer_email'],
                            BookingContact: response['payment_request'].payment['buyer_phone'],
                            BookingId: response['payment_request'].id,
                            TableId : response.table_id[i],
                            PaymentId: response['payment_request'].payment['payment_id']
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
              }
          }, 3000);
          
          }   
        })
    }
    
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

app.get('/bookhist', function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    dbo.collection("BookingHistory").find({}).toArray(function(err, result) {
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
      var query = {TableTime : TableTime[i], TableType : TableType[i]};  
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
  console.log(response['payment_request'].payment['buyer_phone']);
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db(process.env.DB_NAME);
    var query = {BookingContact: response['payment_request'].payment['buyer_phone']};  
    dbo.collection("BookingHistory").find(query).toArray(function(err, result) {
      if (err) throw err;
      
      if(result.length >= 4) {
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
