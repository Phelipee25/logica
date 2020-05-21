/*Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essa
palavra tem.
EX : saúde
2 consoantes

3 vogais*/

var rs = require("readline-sync")

var palavra = rs.question('Digite uma palavra ')
var vogal = 0
var consoantes = 0
console.log(palavra.split(''))

for(var i = 0; i<palavra.length; i++){

    if(palavra[i] == 'a' || palavra[i] == 'e' || palavra[i] == 'i' || palavra[i] == 'o' || palavra[i] == 'u'){
    vogal++
    }
    else {
        consoantes++
    }
}

console.log (`a palavra ${palavra} tem ${vogal} vogais e ${consoantes} consoantes`)