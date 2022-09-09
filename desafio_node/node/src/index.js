const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var arr = [
    "[NOMES CADASTRADOS]",
  ];
const port = 3000
const config = {
    host: 'db_node',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(bodyParser.json());

app.get('/', function(req, res){

    res.sendFile(__dirname + '/simple_form.html'); 

});

app.post('/',function(req,res){
    var username = req.body.username;
    var sqli = `INSERT INTO people(name) values('` + username + `')`
    connection.query(sqli)
   
    connection.query("SELECT name FROM people", function (err, result, fields) {
        Object.keys(result).forEach(function(key) {
            var row = result[key];

            arr.push(row.name)
            
          });
          res.send(arr.join('  |  '));
          
        });
    
    });
      


    
app.listen(port);