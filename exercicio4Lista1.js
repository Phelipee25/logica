var rs = require("readline-sync")
var fruta = rs.questionFloat("Quantas Laranjas quer comprar? ")

if (fruta < 12){
    fruta = fruta * 0.30
    console.log ("sua conta deu: R$" + fruta.toFixed(2))
}
else {
    fruta = fruta * 0.25
    console.log("Sua conta deu: R$" + fruta.toFixed(2))
}