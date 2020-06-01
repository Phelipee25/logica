var rs = require("readline-sync")
var a = rs.questionInt("Digite um numero ")
var b = rs.questionInt("Digite outro numero ")

if (a % b == 0){
    console.log ("o primeiro numero é divisivel pelo segundo.")
}
else {
    console.log("os numeros nao sao divisiveis entre si")
}