/*Crie um algoritmo que solicite um número para o usuário e diga quantos carros mais
potente que o valor informado.
Para isso utiliza a propriedade “Horserpower” do cars.json
DICA: função filter ou procure como contar quantos objetos tem x valor em uma lista no
google.*/


var fs = require('fs')
var json = fs.readFileSync('car.json')
var cars = JSON.parse(json)


var rs = require('readline-sync')
var num = rs.questionInt( 'digite um numero ')

var potencia = cars.filter( (n) => n.Horsepower > num)

console.log(potencia.length)


var origem = cars.filter( (o) => o.Origin == "Japan") 

console.log(origem.length)

var marca = cars.includes('Ford')