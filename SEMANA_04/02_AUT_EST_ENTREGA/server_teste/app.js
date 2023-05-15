const express = require("express");
const prompt = require("prompt-sync")();
const alert = require("alert");
const app = express();
const port = 4000;
const hostname = '127.0.0.1';
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false})
const sqlite3 = require('sqlite3').verbose();
var DBPATH = './banco_dados.db';
const db = new sqlite3.Database(DBPATH);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./main"));

app.get('/contato', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var sql = 'SELECT * FROM contato';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.get('/formacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var sql = 'SELECT * FROM formacao';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.get('/habilidades', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var sql = 'SELECT * FROM habilidades';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.get('/personalidade', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var sql = 'SELECT * FROM personalidade';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.get('/pessoas', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var sql = 'SELECT * FROM pessoas';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.get('/realizacoes', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var sql = 'SELECT * FROM realizacoes';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.post('/inserepessoas', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id;
    var nome = req.body.nome;
    var foto = req.body.foto;
    var cargo = req.body.cargo;
    sql = `INSERT INTO pessoas (id, nome, foto, cargo) VALUES (${id}, "${nome}", "${foto}", "${cargo}")`;
    console.log(sql)
    db.run(sql, [], err => {
        if (err) {
            res.send("Erro no cadastro: " + err);
        }
        else {
            res.send("cadastro realizado com sucesso");
        }
    });
});

app.post('/insererealizacoes', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id;
    var titulo = req.body.titulo;
    var ano = req.body.ano;
    var descricao = req.body.descricao;
    sql = `INSERT INTO realizacoes (titulo, ano, descricao, id) VALUES ("${titulo}", ${ano}, "${descricao}", ${id})`;
    console.log(sql)
    db.run(sql, [], err => {
        if (err) {
            res.send("Erro no cadastro: " + err);
        }
        else {
            res.send("cadastro realizado com sucesso");
        }
    });
});
app.post('/inserepersonalidade', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id;
    var caracteristica = req.body.caracteristica;
    var nivel = req.body.nivel;
    sql = `INSERT INTO personalidade (caracteristica, nivel, id) VALUES ("${caracteristica}", ${nivel}, ${id})`;
    console.log(sql)
    db.run(sql, [], err => {
        if (err) {
            res.send("Erro no cadastro: " + err);
        }
        else {
            res.send("cadastro realizado com sucesso");
        }
    });
});

app.post('/inserehabilidades', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id;
    var ilustrator = req.body.ilustrator;
    var photoshop = req.body.photoshop;
    var dorel_draw = req.body.dorel_draw;
    var dreamweaver = req.body.dreamweaver;
    var htmlcss3 = req.body.htmlcss3
    sql = `INSERT INTO habilidades (ilustrator, photoshop, dorel_draw, dreamweaver, html/css3, id) VALUES (${ilustrator}, ${photoshop}, ${dorel_draw}, ${dreamweaver}, ${htmlcss3}, ${id})`;
    console.log(sql)
    db.run(sql, [], err => {
        if (err) {
            res.send("Erro no cadastro: " + err);
        }
        else {
            res.send("cadastro realizado com sucesso");
        }
    });
});

app.post('/insereformacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id;
    var curso = req.body.curso;
    var descricao = req.body.descricao;
    var data_entrada = req.body.data_entrada;
    var data_saida = req.body.data_saida;
    var experiencia = req.body.experiencia;
    sql = `INSERT INTO realizacoes (curso, descricao, data_entrada, data_saida, experiencia, id) VALUES ("${curso}", "${descricao}", ${data_entrada}, ${data_saida}, "${experiencia}", ${id})`;
    console.log(sql)
    db.run(sql, [], err => {
        if (err) {
            res.send("Erro no cadastro: " + err);
        }
        else {
            res.send("cadastro realizado com sucesso");
        }
    });
});

app.post('/inserecontato', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id;
    var endereco = req.body.endereco;
    var numero_cel = req.body.numero_cel;
    var email = req.body.email;
    var descricao = req.body.descricao;
    sql = `INSERT INTO realizacoes (endereco, numero_cel, email, descricao id) VALUES ("${endereco}", ${numero_cel}, "${email}", "${descricao}" ${id})`;
    console.log(sql)
    db.run(sql, [], err => {
        if (err) {
            res.send("Erro no cadastro: " + err);
        }
        else {
            res.send("cadastro realizado com sucesso");
        }
    });
});

app.put('/atualizapessoas', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var nome = req.body.nome;
    var cargo = req.body.cargo;
    var id = req.body.id;
    var foto = req.body.id
    sql = `UPDATE pessoas SET nome="${nome}", foto="${foto}", cargo="${cargo}" WHERE id=${id}`
    if (err) {
        res.send("Erro na atualização: " + err);
    }
    else {
        res.send("atualizado com sucesso");
    }
});

app.put('/atualizarealizacoes', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id;
    var titulo = req.body.titulo;
    var ano = req.body.ano;
    var descricao = req.body.descricao;
    sql = `UPDATE pessoas SET titulo="${titulo}", ano=${ano}, descricao="${descricao}" WHERE id=${id}`
    if (err) {
        res.send("Erro na atualização: " + err);
    }
    else {
        res.send("atualizado com sucesso");
    }
});

app.put('/atualizapersonalidade', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id;
    var caracteristica = req.body.caracteristica;
    var nivel = req.body.nivel;
    sql = `UPDATE pessoas SET caracteristica="${caracteristica}", nivel=${nivel}, WHERE id=${id}`
    if (err) {
        res.send("Erro na atualização: " + err);
    }
    else {
        res.send("atualizado com sucesso");
    }
});

app.put('/atualizarealizacoes', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id;
    var titulo = req.body.titulo;
    var ano = req.body.ano;
    var descricao = req.body.descricao;
    sql = `UPDATE pessoas SET titulo="${titulo}", ano=${ano}, descricao="${descricao}" WHERE id=${id}`
    if (err) {
        res.send("Erro na atualização: " + err);
    }
    else {
        res.send("atualizado com sucesso");
    }
});

app.put('/atualizahabilidades', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id;
    var ilustrator = req.body.ilustrator;
    var photoshop = req.body.photoshop;
    var dorel_draw = req.body.dorel_draw;
    var dreamweaver = req.body.dreamweaver;
    var htmlcss3 = req.body.htmlcss3
    sql = `UPDATE pessoas SET ilustrator=${ilustrator}, photoshop=${photoshop}, dorel_draw=${dorel_draw}, dreamweaver=${dreamweaver}, htmlcss3=${htmlcss3} WHERE id=${id}`
    if (err) {
        res.send("Erro na atualização: " + err);
    }
    else {
        res.send("atualizado com sucesso");
    }
});

app.put('/atualizarealizacoes', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id;
    var titulo = req.body.titulo;
    var ano = req.body.ano;
    var descricao = req.body.descricao;
    sql = `UPDATE pessoas SET titulo="${titulo}", ano=${ano}, descricao="${descricao}" WHERE id=${id}`
    if (err) {
        res.send("Erro na atualização: " + err);
    }
    else {
        res.send("atualizado com sucesso");
    }
});

app.get('/removepessoa', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id
    sql = `DELETE FROM pessoa WHERE id=${id}`;
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("deletado com sucesso");
        console.log(rows)
    });
});

app.get('/removepersonalidade', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id
    sql = `DELETE FROM personalidade WHERE id=${id}`;
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("deletado com sucesso");
        console.log(rows)
    });
});

app.get('/removerealizacoes', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id
    sql = `DELETE FROM realizacoes WHERE id=${id}`;
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("deletado com sucesso");
        console.log(rows)
    });
});

app.get('/removehabilidades', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id
    sql = `DELETE FROM habilidades WHERE id=${id}`;
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("deletado com sucesso");
        console.log(rows)
    });
});

app.get('/removeformacao', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id
    sql = `DELETE FROM formacao WHERE id=${id}`;
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("deletado com sucesso");
        console.log(rows)
    });
});

app.get('/removecontato', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var id = req.body.id
    sql = `DELETE FROM contato WHERE id=${id}`;
    db.run(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("deletado com sucesso");
        console.log(rows)
    });
});

app.listen(port, () => {
    console.log('Servidor rodando em http://' + hostname + ':' + port);
});