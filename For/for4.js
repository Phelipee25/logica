var rs = require ("readline-sync")
var aluno = []
var nota = []
for (var i = 0; i < 5; i++){
    var nome = rs.question ("Diga o nome de um aluno:  ")
    var nota1 = rs.questionFloat ("Diga a primeira nota:  ")
    var nota2 = rs.questionFloat ("Diga a segunda nota nota:  ")
    nota1 = nota1 * 0.30
    nota2 = nota2 * 0.70
    var media = nota1 + nota2
    var adcionar = aluno.push(nome)
    var adcionar = nota.push(media)
    // console.log ("o aluno ", nome, "tem uma media: ", media.toFixed(1))
}
for (var i = 0; i < aluno.length; i ++){
console.log ("o Aluno " , aluno[i] + ' tem a media: ' + nota[i].toFixed(1))
}