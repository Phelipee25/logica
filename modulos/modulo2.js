var imc = require('fasam-imc-calc')
var rs = require('readline-sync')

var peso = rs.questionFloat('Digite o peso  ')
var altura = rs.questionFloat('Digite a altura  ')

var imc2 = new imc(peso , altura)
console.log ('seu imc e: ' , imc2.calc())