/*Faça um algoritmo que receba o nome de dois jogadores e após isso peça
5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
que apenas o jogador A e B colocou sem repetir nenhum número
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3,4,5,7,8*/


var rs = require("readline-sync")
var numA=[]
var numB=[]
var novoArray=[]
var nameA=rs.question("Digite seu nome, jogador A. ")
    for(var i= 0; i<3; i++){
        numA.push(rs.questionFloat("Nota: "))
        var jaExistenum =novoArray.includes(numA[i])
          if(jaExistenum !==true){
                novoArray.push(numA[i]) 
             }
    }
var nameB=rs.question("Digite seu nome, jogador B. ")
for(var i= 0; i<3; i++){
    numB.push(rs.questionFloat("Nota: "))
    var jaExistenum =novoArray.includes(numB[i])
          if(jaExistenum !==true){
                novoArray.push(numB[i]) 
          }
}
console.log(`Os números digitados por ${nameA} são: ${numA} `)
console.log(`Os números digitados por ${nameB} são: ${numB} `)
console.log(`Os números digitados são : ${novoArray}`)