/*Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna
essa idade expressa em dias.
Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado
utilizando a função criada.*/

const rs = require('readline-sync')


function retornaDias(){
    let ano = rs.questionInt('Digite quantos anos vc tem: ')
    let mes = rs.questionInt('Digite quantos meses tem: ')
    let dia = rs.questionInt('Digite quantos dias agora: ')
    ano = ano * 365
    mes = mes * 30
    idadeEmDias = ano + mes + dia
    console.log(`Você viveu ${idadeEmDias} dias até hoje!`)
}

retornaDias()