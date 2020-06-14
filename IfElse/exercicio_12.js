var rs = require("readline-sync")
var nome = rs.question ("Diga seu nome: ")
var sexo = rs.question ("Diga seu Sexo: ")
var estado = rs.question ("Diga seu estado civil: ")

if (sexo == 'feminino' && estado == 'casada'){
    var ano = rs.question ("A quanto tempo esta casada? ")
    console.log ("está a casada a " + ano + " anos!")
}
else {
    console.log ("Voce é masculino, ou está solteira")
}