/*(OBRIGATÓRIO) Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
Para isso : 
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e inicialize as propriedades com estes valores. 
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e cor. 
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo e cor. 
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor. 
*/

const rs = require('readline-sync')

class Carros{
    constructor(nome, modelo, cor){
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
    }
}


let nomeCarro = rs.question('Digite o nome do carro: ')
let modeloCarro = rs.question('Digite o modelo do carro: ')
let corCarro = rs.question('Digite a cor do carro: ')

let novoCarroNome = rs.question('Digite o nome do carro: ')
let novoCarroModelo = rs.question('Digite o modelo do carro: ')
let novoCarroCor = rs.question('Digite a cor do carro: ')

let carro1 = new Carros(nomeCarro, modeloCarro, corCarro)
let carro2 = new Carros(novoCarroNome, novoCarroModelo, novoCarroCor)

if(carro1.nome == carro2.nome && carro1.modelo == carro2.modelo){
    console.log('os dois carros são iguais')
}else{
    console.log('carros diferentes.')
}