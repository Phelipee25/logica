/*Faça um programa que receba uma palavra e diga se existe vogais ou não.
Utilize o método indexOf()*/

var rs = require('readline-sync')
var palavra = rs.question('digite uma palavra ')   

if(palavra.indexOf('a') || palavra.indexOf('e') || palavra.indexOf('i') || palavra.indexOf('o') || palavra.indexOf('u')){
    console.log(palavra , 'possui vogais')
}
else{
    console.log(palavra , 'não contem vogais')
}