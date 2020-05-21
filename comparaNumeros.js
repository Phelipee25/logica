var num1 , num2
var rs = require('readline-sync')
num1 = rs.question("qual e o primeiro numero?")
num2 = rs.question("qual e o segundo numero?")

if(num1>num2){
console.log("o maior numero e: " + num1)

}
else if(num2>num1){
    console.log("o maior numero e: " + num2)
}
else {
    console.log("os numeros são iguais.")
}