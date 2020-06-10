/*Escreva uma função que receba dois números o primeiro será a base e o segundo a
potência e no final a função retorna a base elevada pela potência.
Faça um programa que peça ao usuário a base e a potência e forneça para a função,
no final imprima o resultado.
OBS: O algoritmo só precisa saber lidar com números inteiros.*/

const rs = require("readline-sync");
let num1 = rs.questionInt('Digite um numero: ')
let num2 = rs.questionInt('Digite outro numero: ')

function potencia(n1, n2){
    let potencia = n1 ** n2
    return potencia
}

let resultado = potencia(num1, num2)

console.log(`o resultado de ${num1} ^ ${num2} é = ${resultado}`)