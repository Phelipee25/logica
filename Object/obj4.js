var rs = require('readline-sync');
var fs = require('fs');
function devolveCarro() {
    var carro = {};
    carro.marca = rs.question('Qual a marca do automovel: ');
    carro.modelo = rs.question('Escolha o modelo do seu automovel: ');
    carro.cor = rs.question('Escoha a cor do seu automovel: ');
    return carro;
}
// var automovel = devolveCarro();
// console.log("Seu automovel é um", automovel.marca, "de modelo", automovel.modelo, "de cor", automovel.cor);
// var automovelEmString = JSON.stringify(automovel);
// var caminhoDoArquivo = './data/carro.json';
// fs.writeFileSync(caminhoDoArquivo, automovelEmString);
// console.log(carro)
function abreGaragem(caminhoObj, fs) {
    // var caminhoObj = "data/carro.json"
    var objDes = fs.readFileSync(caminhoObj)
    var garagem = JSON.parse(objDes)
    return garagem
}
function fechaGaragem(garagem, caminhoDoArquivo, fs) {
    var garagemjson = JSON.stringify(garagem);
    // var caminhoDoArquivo = 'data/carro.json';
    fs.writeFileSync(caminhoDoArquivo, garagemjson);
}
var caminhoJson = "carro.json"
// var caminhoJson = rs.question('Digite o caminho do arquivo: ')
var garagem = abreGaragem(caminhoJson, fs);
while (true) {
    var resp = rs.keyInYN('Voce deseja adicionar outro carro ? : ')
    if (resp == true) {
        var carroNovo = devolveCarro()
        garagem.push(carroNovo)
        fechaGaragem(garagem, caminhoJson, fs)
    } else {
        for (var i = 0; i < garagem.length; i++) {
        console.log("Seu automovel é um", garagem[i].marca, "de modelo", garagem[i].modelo, "de cor", garagem[i].cor);
        }
        break
    }
}