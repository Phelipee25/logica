var rs = require ("readline-sync")

var num = rs.questionInt ("Digite um numero para fazermos a tabuada  ")
var tabuada = 1
var i = 0
while (i < 10){
    console.log(num * tabuada)
    tabuada ++
    i ++
}
