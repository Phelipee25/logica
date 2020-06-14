var rs = require ("readline-sync")

var num = rs.questionInt ("Digite um numero para fazermos a divisao  ")
var i = num
while (i >= 0 ){
    var resto = num % i
    if (resto == 0){
        console.log (i)
    }
    i --
}
