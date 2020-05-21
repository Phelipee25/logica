var primo = require ('prime-number')
var rs = require ('readline-sync')

var num = rs.questionInt("digite um numero  ")

if(primo(num)== true){
    console.log("é primo")
}
else {
    console.log("Não é primo")
}