const express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var DBPATH = 'Banco_dados.bd';
var db = new sqlite3.Database(DBPATH);

app.get("/tudo", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    db.all(`SELECT * FROM nome_tabela`, [], (err, rows) => {
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
});

app.get('/id', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var sql = 'SELECT * FROM id';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.post('/insereid', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "INSERT INTO id (id) VALUES ('" + id + ")";
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    res.end();
});

app.get('/atualizaid', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "SELECT * FROM id";
    console.log(sql);
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.post('/atualizaid', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "UPDATE id SET id='" + id + "'";
    console.log(sql);
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.json(rows);
        res.end();
    });
});

app.get('/removeid', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    sql = "DELETE FROM id WHERE userid='" + id + "'";
    console.log(sql);
    db.run(sql, [], err => {
        if (err) {
            throw err;
        }
        res.json(rows);
        res.end();
    });
});

app.listen(port, () => {
    console.log(`servidor rodando na porta %{port}`)
});