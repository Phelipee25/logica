var rs = require("readline-sync")
var palavra = rs.question("Digite uma palavra  ")

var cont = 0
while (cont < palavra.length) {
    console.log(palavra.charAt(cont))
    cont++
    
}