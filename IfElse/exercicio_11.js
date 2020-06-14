var rs = require("readline-sync")
var nota1 = rs.questionInt ("digite a primeira nota do aluno: ")
var nota2 = rs.questionInt ("digite a segunda nota do aluno: ")
var nota3 = rs.questionInt ("digite a terceira nota do aluno: ")
var media = nota1 + nota2 + nota3
if (media/3 >= 7){
    console.log("aluno Aprovado!")
}
else {
    console.log("aluno REPROVADO!!!")
}