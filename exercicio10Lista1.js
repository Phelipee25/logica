var rs = require("readline-sync")
var num = rs.question ("por favor digite um numero ")

if (num > 100 && num < 200){
    console.log("voce digitou um numero entre 100 e 200")
}
else {
    console.log("voce digitou um numero fora da faixa entre 100 e 200")
}