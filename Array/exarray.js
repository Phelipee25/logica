var rs = require('readline-sync')

var nome = []
var alunos
for(var i = 0; i<5 ; i++){
    alunos = rs.question("digite nomes de launos ")
    nome.push(alunos)
}

console.log(nome)

console.log(nome[3]