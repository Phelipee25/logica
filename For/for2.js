var rs = require("readline-sync")

var num1 = rs.questionInt("Digite um numero:  ")
var num2 = rs.questionInt("Digite outro numero:  ")

for (var i = num1; i <= num2; i++){
    console.log(i)
}
