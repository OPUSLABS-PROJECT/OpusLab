var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root', //change password to yours
  database : 'opus'
});

 //insert message
var insertOne= function(name, companyName, description, dateDue, phone, email, callback){
  connection.query('INSERT INTO list (name, companyName, description, dateDue, phone, email) VALUES (?,?,?,?,?,?)',
  [name, companyName, description, dateDue, phone, email], (err, results)=>{
    if(err){
      console.log("insert error")
      callback(err, null)
    } else{
      console.log(results);
      callback(null, results)
      console.log('done');
    }
  }
)
}

module.exports.insertOne = insertOne
