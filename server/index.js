var express = require('express');
var bodyParser = require('body-parser');
var database = require('../database/index.js');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


//post requests to post a message
app.post('/sendMessage', function(req, res){
  var name = req.body.name
  var companyName =req.body.companyName
  var description =req.body.description
  var dateDue= req.body.dateDue
  var phone= req.body.phone
  var email= req.body.email

  if(!name){
    console.log('post request error');
    res.sendStatus(400);
  }else {
    database.insertOne(name, companyName, description, dateDue, phone, email, (err, results) =>{
      if(err){
        console.log('error in insertOne()');
        res.sendStatus(500)
      } else {
        res.status(200).json(results)
        console.log('done!');
      }
    })
  }
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
