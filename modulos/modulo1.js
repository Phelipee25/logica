var media = require ('median')
var rs = require ('readline-sync')

var notas = []

var aluno = rs.question("Qual o nome do aluno?  ")
console.log("digite as notas do aluno")
for (var i = 0; i < 4; i++){
    var nota = rs.questionInt ('>')
    notas.push(nota)
}

var mediaFinal = media(notas)
console.log(`o aluno ${aluno}, teve uma media de ${mediaFinal}`)