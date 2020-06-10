/*Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
Solicite dois números para o usuário e forneça como argumento para esta função.
Escreva o resultado da função na tela dizendo qual menor número.*/
const rs = require("readline-sync")
let num1 = rs.questionInt("Digite um numero: ")
let num2 = rs.questionInt("Digite outro numero: ")
function retornaNumero(num1, num2){
    if(num1 < num2){
        console.log(`o menor é o ${num1}`)
    }
    else{
        console.log(`o menor é o ${num2}`)
    }

}

retornaNumero(num1, num2)