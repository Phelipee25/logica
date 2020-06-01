var rs = require("readline-sync")

var n1 = rs.questionInt("Digite um numero ")
var n2 = rs.questionInt("Digite um numero ")

var cont = 0
var resultado = 0
while (cont < n1){
    var resultado = n2 + resultado
    cont ++
}
console.log (resultado)