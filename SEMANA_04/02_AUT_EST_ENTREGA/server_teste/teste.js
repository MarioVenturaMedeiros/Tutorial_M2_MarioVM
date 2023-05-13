app.post('/inseregeral', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var nome = req.body.nome
    var cargo = req.body.cargo
    var id = req.body.id
    sql = `INSERT INTO id (id) VALUES (${id}, "${nome}", "${cargo}")`;
    db.run(sql, [], err => {
        if (err) {
            res.send("Erro na gravação: " + err);
        }
        else {
            res.send("ID cadastrado com sucesso");
        }
    });
});

app.put('/atualizageral', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var nome = req.body.nome
    var cargo = req.body.cargo
    var id = req.body.id
    if (nome = null){
        sql = `UPDATE geral SET cargo="${cargo}" WHERE id = ${id}`;
    }
    if (cargo = null) {
        sql = `UPDATE geral SET nome="${nome}" WHERE id = ${id}`;
    }
    else{
        sql = `UPDATE geral SET nome="${nome}", cargo="${cargo}" WHERE id = ${id}`;
    }
    db.all(sql, [], err => {
        if (err) {
            res.send("Erro na atualização: " + err);
        }
        else {
            res.send("ID atualizado com sucesso");
        }
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