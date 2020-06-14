/*(OBRIGATÓRIO) Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
Utilize o pacote : https://www.npmjs.com/package/age-calculator*/

const rs = require('readline-sync')
const ac = require('age-calculator')

let ano = rs.questionInt('Digite o ano de nascimento: ')
let mes = rs.questionInt('Digite o mes de nascimento: ')
let dia = rs.questionInt('Digite o dia de nascimento: ')
let anoEmData = new ac.AgeFromDate (new Date(ano, mes-1, dia)).age
console.log('sua idade é', anoEmData, 'anos')