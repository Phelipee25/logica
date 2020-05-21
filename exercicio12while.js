var rs = require ("readline-sync")
var num2 = 0
var i = 0
while (i < 15){
var num = rs.questionInt("Digite um numero  ")
num2 = num2 + num
i++
}
console.log(num2 / 15)