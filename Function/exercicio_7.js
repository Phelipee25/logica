/*Faça uma função que recebe um número e devolve seu valor absoluto.
No final peça um número para o usuário e exiba o valor absoluto.*/

const rs = require('readline-sync')

function absolut(){
    let numero = []
    numero.push(rs.questionInt('Digite um numero: '))
    numero.split('')
    for(let i = 0; i < numero.length; i++){
        console.log(`o numero absoluto de ${i} é ${i}`)
    }
}
absolut()