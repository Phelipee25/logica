/*Faça um procedimento que recebe, por parâmetro, um valor N e calcula e escreve a
tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
...
N x N = N2
Após isso solicite o usuário um número e forneça o argumento do usuário para a
função.*/


var rs = require('readline-sync')

function Tabuada(n){
    var imprime = []
 for(var i = 1; i <= n; i++){
     var tabu = i*n
     imprime.push(`${i} x ${n} = ${tabu}`)
 }
 return imprime
}

var num = rs.questionInt ("Digite um numero  ")

var tabuada = Tabuada(num)

console.log(tabuada.join("\n"))
