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

/*(OBRIGATÓRIO) Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base cars.json

O campo que define o país no cars.json é Origin
A comparação da string pode ser utilizada usando a palavra “Japan”
A resolução é similar ao exercício 1*/
var origem = cars.filter( (o) => o.Origin == "Japan") 

console.log(origem.length)

/*(OBRIGATÓRIO) Crie um algoritmo que conte quantos carros da Ford existem no cars.json.

A resolução é similar ao exercício 1, porém utilize o método “includes” com parâmetros “Ford” na propriedade Car para realizar a contagem.
*/

var marca = cars.filter((m) => m.Car.includes('Ford'))
console.log(marca.length)
