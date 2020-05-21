var rs = require ("readline-sync")
var menor = 0
var i = 8
while (i > 0){
    var idade = rs.questionInt ("Digite a idade dos seus 8 filhos em sequencia  ")
    var menor = idade
    if (menor > idade){
    menor = menor
    }
    i--
}
console.log (menor)