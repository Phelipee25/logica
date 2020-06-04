const sqlite = require('sqlite3');

var db = new sqlite.Database('PH.db', erro =>{
    if (erro){
        console.log(erro);
    }else{
        console.log('Conectado com sucesso no banco de dados!');
        // db.run('CREATE TABLE Carro (marca text, modelo text, cor text, ano integer)');
    }
});

var query = "INSERT INTO Carro (marca, modelo, cor, ano) VALUES ('volkswagen', 'fusca', 'preto', 1965)";
db.run(query, function(erro) {
    if (erro) {
        console.log('Aconteceu algo de errado: ' + erro.message);
        return;
    }
    console.log('dado inserido com sucesso');
});