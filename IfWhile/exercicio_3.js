var rs = require('readline-sync')

var num = rs.questionInt("Digite um numero ")
var i = 0
var aster = "*"
while(i<num){
    console.log(aster)
    aster = aster + "*"
    i++
}