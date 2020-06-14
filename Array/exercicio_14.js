/*Faça um algoritmo que receba um texto e imprima ele em letras maisuculas. 
Utilize o método toUpperCase()*/
const rs = require('readline-sync')

let palavra = rs.question('digite uma palavra: ')

console.log(palavra.toUpperCase())