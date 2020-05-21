var rs = require("readline-sync")
var num = rs.questionInt ("digite a base  ")
var potencia = rs.questionInt ("digite a potencia  ")

//console.log(num ** potencia)

var cont = 0
var resultado = 1
while (cont < potencia){
    resultado = resultado * num
    cont ++
}
console.log (resultado)