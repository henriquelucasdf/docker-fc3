const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql_in = `INSERT INTO people(name) values('Henrique Lucas')`

connection.query(sql_in)

app.get('/', (req, res) => {
    connection.query("SELECT name FROM people", function (err, result, fields) {
        if (err) throw err;
        var name_ = result[0].name
        res.send('<h1>Full Cycle 3.0</h1> \n <h3>Nome cadastrado: </h3>' + name_)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})

