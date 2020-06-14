/*Escreva um programa que passe por todos os números de 1 a 50 e para cada um deles imprima na tela se o número é par ou ímpar. 
Caso o númerotambém seja primo, o programa deve dizer que ele é primo. 
(um número primo é umnúmero que só é divisível por ele mesmo e por 1). Dica: Neste exercício você podeprecisar de ajuda do operador MÓDULO (%). 
Você também pode precisar criar mais de um loop.*/


var num = 1
var i = 50



while(num <= i){
    var ehPrimo = true
    var cont = 2
    while (cont < num){
        if(num % cont == 0){
            ehPrimo = false
        }
        cont++
    }
    if(num %2 == 0 ){
        if(ehPrimo == true){
        console.log('Par e primo')
        }else {
            console.log ('Par')
        }
    }else {
        if(ehPrimo == true){
        console.log('impar e primo')
        }else {
            console.log('Impar')
        }

    }
num ++

}
