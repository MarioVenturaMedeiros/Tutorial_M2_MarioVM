const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const DBPATH = 'adivinha.db';
const app = express();
const sqlite3 = require('sqlite3').verbose();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("front"));
const db = new sqlite3.Database(DBPATH);

app.get('/', (req , res) => {
    res.sendFile(path.join(__dirname + '/front/home.html'))
});

app.get('/player1', (req, res) =>{
    res.sendFile(path.join(__dirname + '/front/player.html'));
});

app.get('/waiting', (req, res) => {
    res.sendFile(path.join(__dirname + '/front/waitingroom.html'));
})

app.post('/novodado', (req, res) => {
    var numero = req.body.numero
    sql = `UPDATE jogadores SET numero="${numero}" WHERE jogador=1`
    db.all(sql, [], err => {
        if (err){
            res.write("IXI DEU RUIM")
        } else{
            res.send("Escolha feita")
        }
    })
})

app.get('/confere', (req, res) => {
    numero = req.body.numero
    db.all(sql, [], (err, rows) => {
        
        sql = `SELECT jogador FROM jogadores WHERE numero="${numero}"`
        if (err) {
            res.write("FAMILIA, DEU RUIM")
        } else{
            if (rows.length == 0) {
                res.send("ERROU")
            }else {
                res.send("ACERTOU, MIZERAVI")
            }
        }
    })

})