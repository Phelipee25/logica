var odd = require('is-odd')
var rs = require ('readline-sync')

var num = rs.questionInt('Digit um numero: ')

if (odd(num)==true){
    console.log(num , 'e Impar')
}
else {
console.log(num , 'e par')
}