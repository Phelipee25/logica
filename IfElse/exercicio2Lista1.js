var rs = require("readline-sync")
var num = rs.questionInt ("coloque um numero de 1 a 100: ")

if (num == 0){
    console.log("o numero: "+ num + " e neutro!")
}
else if (num %2 == 0){
    console.log("o numero: " + num + " e par!")
}
else {
    console.log("o numero: " + num + " e impar!")
}