var rs=require("readline-sync")


var num1
var num2
var res
while(true){
    var a = rs.question(" Digite uma opcao A ou B  ")
    if (a == "A"){
        break
    }
    else if (a == "B"){
    num1 = rs.questionInt("Digite um numero  ")
    num2 = rs.questionInt("Digite um numero  ")
    res = num1+num2
    console.log("Resultado = " + res + "!")
    }
    else {
        a = rs.question(" Digite uma opção A ou B  ")
    }

}