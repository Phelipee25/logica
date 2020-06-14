var rs = require("readline-sync")
var palavra = rs.question ("Digite uma palavra  ")

var cont = palavra.length
while (cont >= 0) {
    console.log(palavra.charAt(cont))
    cont--
    
}