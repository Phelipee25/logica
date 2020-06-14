/*(LEFT JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça
5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
que apenas o jogador A colocou diferente do B.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
4,5*/

var rs = require("readline-sync")

var jogadorA = rs.question("Digite o nome do primeiro jogador:  ")
var jogadorB = rs.question("Digite o nome do segundo jogador:  ")
var a = []
var b = []
var resultado = []
var num1 = 0
var num2 = 0
for(var i = 0; i < 5; i++){
    num1 = rs.question("Digite um numero para o jogador 1:  ")
    a.push(num1)
}
for(var i = 0; i < 5; i++){
    num2 = rs.question("Digite um numero para o jogador 2:  ")
    b.push(num2)
}
for(var i = 0; i < a.length; i++){

    if(a[i] != b [i]){
    var diferente = a[i]
    console.log(`o jogador[a] ${jogadorA} teve os seguintes numeros ${diferente} diferentes.`)
    }
}