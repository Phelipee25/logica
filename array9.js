/*Faça um programa que receba um nome e imprima a terceira letra do nome.
Utilize o método charAt() para esta atividade.*/


var rs = require('readline-sync')

var nome = rs.question('Digite um nome de uma pessoa ')

// var letra = nome.split('')

// console.log (letra[2])

console.log(nome.charAt(2))