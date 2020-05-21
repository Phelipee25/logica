/*Faça um algoritmo em que o usuário possa cadastrar preços de produtos e no final
exiba o preço de cada produto junto com o valor total. após inserir todos os produtos o
programa deve pedir o valor a ser pago, caso o valor passe do da compra exibir o troco,
se o valor for menor informar que a compra vai ser cancelada.*/

var rs = require ("readline-sync")
var quantidade = rs.questionInt("Quantos produtos vai comprar? ")
var produtos = []
var preco = []

for (var i = 0; i < quantidade; i++){
    var prod = rs.question("Qual produto comprar:  ")
    var custo = rs.questionFloat ("Qual o preco:  ")
    produtos.push(prod)
    preco.push(custo)
}

var dinheiro = rs.questionInt("Quanto dinheiro tem para pagar: ")

var totalCompra = 0

for(var i = 0; i < preco.length; i++){
    var precoAtual = preco[i]
    console.log(`${produtos[i]} R$${precoAtual.toFixed(2)}`)
    var somaProdutos = totalCompra + precoAtual
    totalCompra = somaProdutos
}

console.log ("Total da compra R$" + totalCompra)

if(dinheiro < totalCompra){
    console.log("Dinheiro insuficiente, passe amanha")
}
else if(dinheiro == totalCompra.toFixed(2)){
    console.log ("Obrigado, tenha um otimo dia!")
}
else{
    console.log("voce deu dinheiro a mais, aguarde seu troco.")
    var troco = dinheiro - totalCompra
    console.log("aqui esta seu troco  R$" + troco.toFixed(2))
}